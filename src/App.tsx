import React, {useState} from 'react';
//Types
import {fetchQuizQuestions, QuestionState} from "./API";
//Components
import QuestionCard from "./components/QuestionCard";
import {IncentiveSaying} from "./components/score";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correct_answer: string;

}

const TOTAL_QUESTIONS = 10;
const App = () => {
    const [question, setQuestion] = useState<QuestionState[]>(fetchQuizQuestions())
    const [number, setNumber] = useState(0)
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [userName, setUserName] = useState<string>()
    const [isFinshed, setIsFinished] = useState(false)

    // console.log("username " + userName)
    // console.log("isFinished " + isFinshed)
    // console.log("gameover " + isRunning)
    // console.log(question);

    const startTrivia = () => {
        setIsRunning(true)

        const newQuestions = fetchQuizQuestions();

        setQuestion(newQuestions);
        setScore(0);
        setUserAnswer([]);
        setNumber(0);

    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isRunning) {
            //User answer
            const answer = e.currentTarget.value;
            // Check answer against correct answer
            const correct = question[number].correct_answer === answer
            //Add score if answer is correct
            if (correct) setScore(prev => prev + 1);
            //Save answer in array for user answer
            const answerObject: AnswerObject = {
                question: question[number].question,
                answer,
                correct,
                correct_answer: question[number].correct_answer,

            };
            setUserAnswer((prev) => [...prev, answerObject])
            setNumber(number + 1)
            if (number === TOTAL_QUESTIONS - 1) {
                setIsRunning(false)
                setIsFinished(true)
            }
        }
        // console.log(userAnswer)
        // console.log(number)
    };

    const resetGame = () => {
        setIsRunning(false)
        setIsFinished(false)
        setScore(0)
        setUserAnswer([])
        setNumber(0)
    }

    const getScoreMessage = (score: number) => {
            switch (score) {
                case 0:
                    return IncentiveSaying[0];
                case 1:
                    return IncentiveSaying[1];
                case 2:
                    return IncentiveSaying[2];
                case 3:
                    return IncentiveSaying[3];
                case 4:
                    return IncentiveSaying[4];
                case 5:
                    return IncentiveSaying[5];
                case 6:
                    return IncentiveSaying[6];
                case 7:
                    return IncentiveSaying[7];
                case 8:
                    return IncentiveSaying[8];
                case 9:
                    return IncentiveSaying[9];
                case 10:
                    return IncentiveSaying[10];
                default:
                    return "You did it!";
            }
        }


            return (
                <div className="App">
                    <h1>REACT QUIZ</h1>
                    {!isRunning && !isFinshed ?
                        (
                            <div>
                                <form>
                                    <input
                                        onChange={(e) => setUserName(e.target.value)}
                                        name="userName" type="text" value={userName}/>
                                </form>
                                <button className="start" onClick={startTrivia}>
                                    Start
                                </button>
                            </div>
                        ) : null}
                    {isRunning ? <p className="score">Score: {score} </p> : null}
                    {isRunning && !isFinshed && (
                        <QuestionCard
                            questionNr={number + 1}
                            totalQuestion={TOTAL_QUESTIONS}
                            question={question[number].question}
                            answers={question[number].answers}
                            userAnswer={userAnswer ? userAnswer[number] : undefined}
                            callback={checkAnswer}
                        />
                    )}
                    {!isRunning && userAnswer.length === TOTAL_QUESTIONS && isFinshed ? (
                        <div>
                            <div>{userName}</div>
                            <div>{score}</div>
                            <div>{getScoreMessage(score)}</div>
                            <button onClick={resetGame}>Quiz erneut starten</button>
                        </div>
                    ) : null
                    }
                </div>

            );
}

export default App;
