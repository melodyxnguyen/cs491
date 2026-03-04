import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import House from './House'
import Room from './Room'

function App() {
  const [count, setCount] = useState(0) // state hook

  function increment() {
    setCount((prev) => prev + 1)
  }

  function decrement() {
    setCount((prev) => prev + -1)
  }

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
      <h1>Vite + React + Me </h1>

      <h3>Counter</h3>
      <div className="card">
        <button onClick={decrement}> - </button>

        <button> {count} </button>

        <button onClick={increment}> + </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <House name="paradise"></House>
    </>
  )
}

export default App
