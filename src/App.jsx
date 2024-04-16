import { useState } from 'react'
import Card from './components/Card/Card'
import CardProps from './components/CardProps/CardProps'
import './style/App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Супергерои</h1>
      <Card />
      <CardProps
        name="Бэтмен"
        universe="DC Comics"
        alterego="Брюс Уэйн"
        occupation="борец с преступностью, филантроп, миллиардер"
        friends="Робин, Бэтгерл"
        superpowers="интеллект, обширные познания, знания боевых искусств, ловкость"
        url="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
        />
    </>
  )
}

export default App
