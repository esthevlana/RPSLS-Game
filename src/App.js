import { useEffect, useState } from "react";
import Rules from "./components/Rules";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["🪨", "📜", "✂️", "🦎", "🖖"];

  const handleClick = (value) => {
    setUserChoice(value);
    showComputerChoice();
  };

  const showComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "✂️📜":
        case "🪨✂️":
        case "📜🪨":
        case "🪨🦎":
        case "🦎🖖":
        case "🖖✂️":
        case "✂️🦎":
        case "🦎📜":
        case "📜🖖":
        case "🖖🪨":
          setResult("You win!🎉");
          setUserScore(userScore + 1);
          break;
        case "📜✂️":
        case "✂️🪨":
        case "🪨📜":
        case "🦎🪨":
        case "spock🦎":
        case "✂️spock":
        case "🦎✂️":
        case "📜🦎":
        case "🖖📜":
        case "🪨🖖":
          setResult("You lose!☠️");
          setComputerScore(computerScore + 1);
          break;
        case "🪨🪨":
        case "📜📜":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          setResult("It's a draw!🚨");
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <>
      <Rules/>
      <h1 className="header">The Rock Paper Scissors Lizard Spock Game</h1> 
      <div>
        <div className="info-container">
          <div className="info-card">
            <div className="player-display">
              <h1>You:</h1>
            </div>
            <div className="show-selection">{userChoice}</div>
            <div className="score-display">
              <h2>Score: {userScore}</h2>
            </div>
          </div>

          <div className="info-card">
            <div className="player-display">
              <h1>Computer:</h1>
            </div>
            <div className="show-selection">{computerChoice}</div>
            <div className="score-display">
              <h2>Score: {computerScore}</h2>
            </div>
          </div>
        </div>

        <div className="result-display line">
          <h1 className="flipX">{result}</h1>
        </div>

        <div className="btn-choice">
          {choices.map((choice, index) => (
            <button
            className="btn"
            key={index}
            onClick={() => handleClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
