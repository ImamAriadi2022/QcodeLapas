import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className=''>
      <div className="container">
      <h1 className="text-center mt-5 text-white">Hello, Bootstrap 5.3 with React and Vite!</h1>
      <button className="btn btn-primary mt-3">Click Me</button>
    </div>
    </main>
    </>
  )
}

export default App
