import { AxiosResponse } from "axios";
import axiosInstance from "./apiClient";

export async function get<T>(endpoint: string): Promise<T> {
    const response: AxiosResponse<T> = await axiosInstance.get(endpoint);
    return response.data;
}

export async function post<D, R>(endpoint: string, data?: D): Promise<R> {
    const response: AxiosResponse<R> = await axiosInstance.post(endpoint, data);
    return response.data;
}