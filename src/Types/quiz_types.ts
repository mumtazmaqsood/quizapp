import React from 'react'
/* here we define types */
export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

/* these type define on the basis of above data */
export type QuestionType = {
    question: string
    answer: string
    option: string[]
    correct_answer: string
}

export type QuestionPropType = {
    question: string
    option: string[]
    callback: (e: React.FormEvent<EventTarget>, ans:string) => void
}