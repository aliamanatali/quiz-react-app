import React, {useState, useContext} from 'react'
import { QuizContext } from '../Helpers/context'
import Questions from '../Helpers/QuestionBank'


const Quiz = () => {
    const {score, setScore, setGameState }= useContext(QuizContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if(Questions[currentQuestion].Answer === optionChosen){
            setScore(score+1);
        }
        alert("Your score is "+score+"");
        setCurrentQuestion(currentQuestion+1);
    };

    const finishQuiz = () => {
        if(Questions[currentQuestion].Answer === optionChosen){
            setScore(score+1);
        }
        alert(score);
        setGameState("endScreen");
    }
  return (
    <div className='Quiz'>
        <h2>{Questions[currentQuestion].questionText}</h2>
        <div className='options'>
        <button onClick={()=>setOptionChosen("A")}>{Questions[currentQuestion].OptionA}</button>
        <button onClick={()=>setOptionChosen("B")}>{Questions[currentQuestion].OptionB}</button>
        <button onClick={()=>setOptionChosen("C")}>{Questions[currentQuestion].OptionC}</button>
        <button onClick={()=>setOptionChosen("D")}>{Questions[currentQuestion].OptionD}</button>
        </div>
        {currentQuestion===Questions.length-1 ? 
        (<button onClick={finishQuiz}>Finish Quiz</button>):(<button onClick={nextQuestion}>Next Question</button>)}
    </div>
  )
}

export default Quiz