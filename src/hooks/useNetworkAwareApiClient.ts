import { fetch, useNetInfo } from "@react-native-community/netinfo";
import { get, post } from "../services";
import AppNetworkError from "../errors/appNetworkError";

export function useNetworkAwareApiClient() {
    const { isConnected: hasNetworkConnection } = useNetInfo()

    async function checkConnection() {
        if (hasNetworkConnection !== null && hasNetworkConnection !== undefined) {
            return hasNetworkConnection;
        }
        const { isConnected } = await fetch();
        return isConnected;
    }

    async function guardedGET<T>(url: string): Promise<T> {
        const isConnected = await checkConnection();
        if (!isConnected) {
            throw new AppNetworkError()
        }
        return await get<T>(url);
    }

    async function guardedPOST<D, R>(url: string, data?: D): Promise<R> {
        const isConnected = await checkConnection();
        if (!isConnected) {
            throw new AppNetworkError()
        }
        return await post<D, R>(url, data);
    }

    return {
        get: guardedGET,
        post: guardedPOST
    }
}