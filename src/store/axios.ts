import axios, { AxiosInstance } from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const dzangoapi: AxiosInstance = axios.create({
  baseURL: baseURL,
});
