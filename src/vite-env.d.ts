/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
    readonly VITE_APP_VERSION: string
    readonly VITE_API_BASE_URL: string
    readonly VITE_ENV: 'development' | 'test' | 'staging' | 'production'
    readonly VITE_DEBUG_MODE: string
    readonly VITE_ENABLE_MOCK: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}