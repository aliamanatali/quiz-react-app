import './App.css';
import React, {useState} from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/context';
// import Questions from './Helpers/QuestionBank';


function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quizirium</h1>
      {(gameState === 'menu') && <h2 style={{marginTop:"0px"}} >Welcome to the Best Online Quiz Platform!</h2>}
      
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
    {gameState === "menu" && <MainMenu />}
    {gameState === "quiz" && <Quiz />}
    {gameState === "endScreen" && <EndScreen />}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
