export type Question = {
    correct_answer: string;
    answers: string[];
    question: string;

}

export type QuestionState = Question & {answers: string[]}


//TODO Question in jsonData
export const fetchQuizQuestions =  ()=> {
    let data : Question[] = []
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => data = json);
        return data
        }
