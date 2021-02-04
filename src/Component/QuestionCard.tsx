import React, { useState } from 'react';
import { QuestionPropType } from '../Types/quiz_types';

export const QuestionCard: React.FC<QuestionPropType> = ({ question, option, callback }) => {

    let [selectedAnswer, setSelectedAnswer] = useState("");
    let [score, setScore] = useState();

    const handleSelection = (e:any) => {
        setSelectedAnswer(e.target.value) 
    }
    
    return (
        <div className="question-container">
            <h1>Question Card</h1>
            <div className="question">
                {question}
            </div>

            <form onSubmit={(e: React.FormEvent<EventTarget>) =>callback(e, selectedAnswer) }>
                {
                    option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input 
                                    type="radio" 
                                    name="opt" 
                                    required
                                    value={opt}
                                    checked={selectedAnswer === opt }
                                    onChange={handleSelection}
                                     />
                                    {opt}
    
                                </label>
                            </div>
                        )

                    })
                }
                <input type="submit"  />
                
            </form>
        </div>
    )
}
