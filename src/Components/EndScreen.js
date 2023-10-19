import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/context'
import Questions from '../Helpers/QuestionBank'
const EndScreen = () => {
    const {score, setScore, setGameState}= useContext(QuizContext);
    const RestartQuiz = () => {
        setScore(0);
        setGameState("menu");
        window.location.reload();
    }
    return (
    <div className='restartQuiz'>
        <h3>Your score is {score} out of {Questions.length}</h3>
        <button onClick={RestartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen