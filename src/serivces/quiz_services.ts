
import { Quiz, QuestionType} from '../Types/quiz_types';

/* shuffle results  copy paste this function   */
const shuffleArray = (array: any[]) => 
    [...array].sort( () => Math.random() - 0.5)


/* Promise<Quiz[]> --> it will promise and array of quiz */
export const getQuizDetails = async (totalQuestion: number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`)
    let { results } = await res.json()
    const quiz: QuestionType[] = results.map((questionObj: Quiz, index: number) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz
}