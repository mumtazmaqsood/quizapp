import React from 'react';
import { QuestionPropType } from '../Types/quiz_types';

export const QuestionCard: React.FC<QuestionPropType> = ({ question, option, callback }) => {
    return (
        <div className="question-container">
            <h1>Question Card</h1>
            <div className="question">
                {question}
            </div>

            <form onSubmit={callback}>
                {
                    option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input type="radio" name="opt" value={opt} />
                                    {opt}
                                </label>
                            </div>
                        )

                    })
                }
                <input type="submit" />
            </form>
        </div>
    )
}
