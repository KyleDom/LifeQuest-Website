import axios from "axios";

const baseURL = process.env.REACT_APP_API;

export default axios.create({
    baseURL: baseURL,
})