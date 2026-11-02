import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 10000,
});

export const MEDIA_URL = process.env.NEXT_PUBLIC_API_URL;