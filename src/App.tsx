import { getEnvConfig } from './utils/env'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const envConfig = getEnvConfig()
  return (
    <>
        <div>
            <h1>当前环境：{import.meta.env.VITE_ENV}</h1>
            <p>API_BASE_URL:{envConfig.getApiBaseUrl()}</p>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
        </div>
        <h1>Vite + React</h1>
    </>
  )
}

export default App
