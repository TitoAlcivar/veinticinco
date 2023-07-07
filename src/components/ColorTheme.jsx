import { useState } from 'react'
import { ButtonTheme } from './ButtonTheme'


export const ColorTheme = () => {
  const [counter, setCounter] = useState('light')
  
  return (
    <div className={counter}>
      <h1>H</h1>
      <p>h</p>
      <p>h</p>
      <ButtonTheme setCounter={setCounter} counter={counter}/>
    </div>
  )
}
