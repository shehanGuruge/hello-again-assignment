import axios from "axios";
import Config from "react-native-config";

const axiosInstance = axios.create({
    baseURL: `${Config.API_BASE_URL}/${Config.API_VERSION}/`
});

axiosInstance.interceptors.request.use((config) => config, (error) => Promise.reject(error));
axiosInstance.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default axiosInstance;
