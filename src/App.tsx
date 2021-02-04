import React, { useEffect, useState } from 'react';
import { QuestionCard } from './Component/QuestionCard';
import { getQuizDetails } from './serivces/quiz_services';
import { Quiz, QuestionType } from './Types/quiz_types';
import './App.css';


function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])

  let [currentStep, setCurrentStep] = useState(0)

  let [score, setScore] = useState(0);
  


  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, 'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns:string) => {
    e.preventDefault()
    
    /*  data of one question */
    const currentQuestion:QuestionType = quiz[currentStep];
    console.log(`correct answer:${currentQuestion.correct_answer}: user selection:${userAns}`)
    if(userAns === currentQuestion.correct_answer){
      setScore(++score)
    }
    
    if (currentStep !== quiz.length-1) {
      setCurrentStep(++currentStep)
      
    }
    else {
      alert(`Your final score:${score} out of : ${quiz.length}`);
      setCurrentStep(0);
    }

  }

  if (!quiz.length) {
    return <h3>Loading....</h3>
  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      <QuestionCard
        option={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
