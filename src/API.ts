export type Question = {
    correct_answer: string;
    answers: string[];
    question: string;

}

export type QuestionState = Question & { answers: string[] }


export const fetchQuizQuestions = (): Question[] => {
    let json = require('./data.json');
    const questions = []
    const selectedQuestions = [];
    //console.log(json);
    const data = json.questions;
    for (const element of data) {
        //console.log(element);
        questions.push(readQuestions(element));
    }
    //console.log(questions.length)

    for (let i = 0; i < 10; i++) {
        const item = questions[Math.floor(Math.random() * questions.length)];
        selectedQuestions.push(item);
        //Lösche aus Liste aller Fragen, keine doppleten Fragen
        questions.splice(questions.indexOf(item), 1);
    }
    return selectedQuestions;
}

export const readQuestions = (q: any): Question => {
    return {
        question: q.question,
        answers: q.answers,
        correct_answer: q.correct_answer
    };
}