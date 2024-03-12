export type Question = {
    correct_answer: string;
    answers: string[];
    question: string;

}

export type QuestionState = Question & { answers: string[] }


//TODO Limit to ten questions
export const fetchQuizQuestions = (): Question[] => {
    let json = require('./data.json');
    const  questions = []
    //console.log(json);
    const data = json.questions;
    for(const element of data) {
        //console.log(element);
        questions.push(readQuestions(element));
    }
    return questions;
}

export const readQuestions = (q: any): Question => {
    return {
        question: q.question,
        answers: q.answers,
        correct_answer: q.correct_answer
    };
}
