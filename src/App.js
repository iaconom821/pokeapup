import { useState } from "react";
import "./App.css";
import doge from "./doge.png";

function App() {
  const [playerScore, setPlayerScore] = useState(0);

  const dogImg = (
    <img
      className="dogPic"
      src={doge}
      alt="doge"
      onClick={(e) => handleClick(e)}
    />
  );

  function handleClick(e) {
    const posx = (
      Math.random() *
      (document.getElementById("dogContainer").offsetWidth - 38)
    ).toFixed();
    const posy = (
      Math.random() *
      (document.getElementById("dogContainer").offsetHeight - 38)
    ).toFixed();
    e.target.style.position = "relative";
    e.target.style.left = `${posx}px`;
    e.target.style.top = `${posy}px`;
    setPlayerScore((oldScore) => (oldScore += 1));
  }

  return (
    <>
      <div id="clouds">
        <h2 className="titleText">Poke-a-Pup</h2>
        <h3 className="titleText">Pup Poked {playerScore} times!</h3>
        <div className="dogContainer" id="dogContainer">
          {dogImg}
        </div>
      </div>
    </>
  );
}

export default App;

