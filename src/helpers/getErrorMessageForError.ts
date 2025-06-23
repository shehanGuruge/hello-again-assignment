import axios from "axios";
import AppNetworkError from "../errors/appNetworkError";

export function getErrorMessageForError(error: unknown) {
    if (error instanceof AppNetworkError) {
        return "Device is not connected to internet. Please check your internet connection and try again."
    } else if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;
        switch (status) {
            case 400:
                return "Invalid request."
            case 404:
                return "Data not found."
            case 500:
            case 502:
            case 503:
                return "Our servers are currently experiencing issues. Please try again later.";
            default:
                return "An unexpected server error occurred. Please try again.";
        }
    } else {
        return "Something went wrong. Please try again."
    }
}