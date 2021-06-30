import { useState } from 'react'
import './App.css';
import doge from './doge.png'

function App() {
  const [playerScore, setPlayerScore] = useState(0)

  const dogImg = <img className="dogPic" src={doge} alt="doge" onClick={(e) => handleClick(e)} /> 

  function handleClick (e) {
    const posx = (Math.random() * (document.body.offsetWidth - 38)).toFixed();
    const posy = (Math.random() * (document.body.offsetHeight - 38)).toFixed();
    debugger;
    e.target.style.position = "absolute"
    e.target.style.left = `${posx}px`
    e.target.style.bottom = `${posy}px`
    setPlayerScore((oldScore => oldScore += 1))
  }

  return ( 
    <>
    <h1>{playerScore}</h1>
    {dogImg}
    </>
  )
}

export default App;
