import React, { useEffect, useState } from 'react';
import { QuestionCard } from './Component/QuestionCard';
import { getQuizDetails } from './serivces/quiz_services';
import { Quiz, QuestionType } from './Types/quiz_types';
import './App.css';


function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])

  let [currentStep, setCurrentStep] = useState(0)


  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(5, 'easy');
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if (currentStep !== quiz.length-1) {
      setCurrentStep(++currentStep)
    }
    else {
      alert("Quiz Ended");
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
