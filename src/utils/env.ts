
export const getEnvConfig = () => {
    return {
        isDev: import.meta.env.VITE_ENV === 'development',
        isTest: import.meta.env.VITE_ENV === 'test',
        isStaging: import.meta.env.VITE_ENV === 'staging',
        isProd: import.meta.env.VITE_ENV === 'production',

        getApiBaseUrl: () => import.meta.env.VITE_API_BASE_URL,
        isDebugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
        isMockEnabled: import.meta.env.VITE_ENABLE_MOCK === 'true'
    }
}