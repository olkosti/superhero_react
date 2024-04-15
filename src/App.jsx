import { useState } from 'react'
import Card from './components/Card/Card'
import './style/App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Супергерои</h1>
      <Card />
    </>
  )
}

export default App
