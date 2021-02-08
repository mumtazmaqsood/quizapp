import React, { useEffect, useState } from 'react';
import { QuestionCard } from './Component/QuestionCard';
import { getQuizDetails } from './serivces/quiz_services';
import { QuestionType } from './Types/quiz_types';
import './App.css';
/* import { QueryByText } from '@testing-library/react'; */


function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])

  let [currentStep, setCurrentStep] = useState(0)

  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);
  let [showComponent, setShowComponent] = useState(false);

  /* const currentQuestion: QuestionType = quiz[currentStep]; */
  let [getCorrectAnswer, setCorrectAnswer] = useState<any>("")
  /* let answers:string[] = [] */
  

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, 'easy');
      console.log(questions);
      setQuiz(questions);
      
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault()

    /*  data of one question */
    const currentQuestion: QuestionType = quiz[currentStep];
    console.log(`correct answer:${currentQuestion.correct_answer}: user selection:${userAns}`)
    


    if (userAns === currentQuestion.correct_answer) {
      setScore(++score)
      
    }

/*     if (userAns !== currentQuestion.correct_answer) {
     
      alert(" Not correct")
    } */

    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep)

    }
    else {
      setShowResult(true);
      setShowComponent(false);
    }
    

  }

  if (!quiz.length) {
    return <h3>Loading....</h3>
  }


  const startQuiz = () => {
    setShowComponent(true);
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
  }

  

  return (
    <div className="App">
      <button onClick={startQuiz} > Start Quiz</button>
      <div><h1>Quiz App</h1>

        {showComponent ?
          <QuestionCard
            option={quiz[currentStep].option}
            question={quiz[currentStep].question}
            callback={handleSubmit}
            totalQuestion={quiz.length}
            steps={currentStep}
            correctAnswer = {quiz[currentStep].correct_answer}
          /> : null}
      </div>

      <div>
        {showResult ? (<div className="question-container result">
          <h2>Result</h2>
          <p>Your final score:{score} out of : {quiz.length}</p>
          <p>{getCorrectAnswer}</p>
          <button onClick={startQuiz}>Try again</button>
        </div>) : null}
      </div>

    </div>
  );
}

export default App;
