import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> 동준이 엉덩이의 숨은 방적식을 찾아라</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          동준이엉덩이 방정식을 찾기위해 전생한 횟수 {count}
        </button>
        <p>
          동준이 엉덩이 동덩이
        </p>
      </div>
      <p className="read-the-docs">
        Click on the 동덩이 and 엉덩이 logos to learn more
      </p>
    </>
  )
}

export default App
