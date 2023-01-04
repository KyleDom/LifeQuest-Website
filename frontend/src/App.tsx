import { Navbar } from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { lazy, Suspense } from "react";
import PublicRoute from "./components/PublicRoute";
import useAuth from "./hooks/useAuth";
import Signup from "./pages/SignUp";
import Missing from "./pages/Missing";

const Home = lazy(() => import("./pages/Home"));
const Team = lazy(() => import("./pages/Team"));
const LogIn = lazy(() => import("./pages/LogIn"));

function App() {
  const { loadingCredentials } = useAuth();

  const Loader = () => (
    <>
      <div
        className="position-relative d-flex justify-content-center align-items-center bg-light"
        style={{ height: "80vh", width: "100vw", zIndex: 2000 }}
      >
        <img
          height={70}
          srcSet="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt="loading"
        />
      </div>
    </>
  );

  if (loadingCredentials) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
