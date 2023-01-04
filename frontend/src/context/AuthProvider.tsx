import { createContext, ReactNode, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from './../api/axios';

let authProps: any = {};

const AuthContext = createContext(authProps);

interface Props {
    children?: ReactNode;
}

export const AuthProvider = ({ children, ...props }: Props) => {
    type authType = undefined | string | null;
    const [auth, setAuth] = useState<authType>();
    const [admin, setAdmin] = useState(false);
    const [loadingCredentials, setLoadingCredentials] = useState(true);

    useEffect(() => {
        setLoadingCredentials(true);
        localStorage.getItem("accessToken") === null ? setAuth(undefined) : setAuth(localStorage.getItem("accessToken"));

        const config = {
            headers: { Authorization: `Bearer ${auth}` },
        };

        if (auth !== undefined) {
            axios
                .get("/user/verify", config)
                .then((res) => {
                    if (res.data?.auth === "Invalid token") {
                        setAuth(undefined);
                        setAdmin(false);
                        localStorage.removeItem("accessToken");
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Looks like your session is expired. Please login again!",
                        });
                    }

                    res.data?.responce ? setAdmin(true) : setAdmin(false);
                })
                .catch((err) => console.log(err));
        }

        setLoadingCredentials(false);
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, admin, setAdmin, loadingCredentials }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;