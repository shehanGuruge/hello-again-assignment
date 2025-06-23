declare module 'react-native-config' {
    export interface NativeConfig {
        API_BASE_URL?: string;
        API_VERSION?: string;
    }

    export const Config: NativeConfig
    export default Config
}