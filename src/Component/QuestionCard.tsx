import React, { useState } from 'react';
import { QuestionPropType } from '../Types/quiz_types';

export const QuestionCard: React.FC<QuestionPropType> = ({ question, option, callback, totalQuestion, steps, correctAnswer }) => {

    let [selectedAnswer, setSelectedAnswer] = useState("");
    /* let [corAnswer, setCorAnswer] = useState(""); */
    /* let [showQuestion, setShowQuestion] = useState(true); */
    let [showResult, setShowResult] = useState(false);


    const handleSelection = (e: any) => {
        setSelectedAnswer(e.target.value)
        setShowResult(true);
        /* setShowQuestion(false); */
    }

    
    
    return (
        <div>
            
            <div className="question-container">
                <h1>Question Card</h1>
                <span>{steps} / {totalQuestion}</span>
                <div className="question">
                    {question}
                </div>
                <form onSubmit={(e: React.FormEvent<EventTarget>) =>
                    callback(e, selectedAnswer)
                    
                }>

                    {
                        option.map((opt: string, ind: number) => {
                            return (
                                <div key={ind}>

                                    <label >
                                        <input
                                            type="radio"
                                            name="opt"
                                            required
                                            value={opt}
                                            checked={selectedAnswer === opt}
                                            onChange={handleSelection}
                                        />
                                        {opt}
                                    </label>
                                </div>
                            )
                        })
                    }
                    <input type="submit" onClick={()=>alert(`correct answer: ${correctAnswer}`)} />
                        
                </form>
            </div>

                            
            </div >
        
    )
}
