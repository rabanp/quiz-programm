import React, {useState} from 'react';
//Types
import {Difficulty, fetchQuizQuestions, QuestionState} from "./API";
//Components
import QuestionCard from "./components/QuestionCard";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correct_answer: string;

}

const TOTAL_QUESTIONS = 10;
const App = () => {
    const [loading, setLoading] =useState(false)
    const [question, setQuestion] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))


    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS, Difficulty.EASY);

        setQuestion(newQuestions);
        setScore(0);
        setUserAnswer([]);
        setNumber(0);
        setLoading(false);

    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!gameOver) {
          //User answer
          const answer = e.currentTarget.value;
          // Check answer against correct answer
          const correct = question[number].correct_answer === answer
          //Add score if answer is correct
          if (correct) setScore(prev => prev + 1);
          //Save answer in array for user answer
          const answerObject = {
            question: question[number].question,
              answer,
              correct,
              correctAnswer: question[number].correct_answer,

          };
          setUserAnswer((prev) => [...prev, answerObject]);
      }

    };

    const nextQuestion = () => {
        // Move on to next question if not the last question
        const nextQuestion = number +1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <div className="App">
            <h1>REACT QUIZ</h1>
            {gameOver // userAnswer.length === TOTAL_QUESTIONS ?
                 (
            <Button className="start" onClick={startTrivia}>
                Start
            </Button>
                ) : null}
            {!gameOver ? <p className="score">Score:</p> : null}
            {loading && <p>Loading Question ...</p>}
            {!loading && !gameOver && (
            <QuestionCard
                questionNr={number + 1}
                totalQuestion={TOTAL_QUESTIONS}
                question={question[number].question}
                answers={question[number].answers}
                userAnswer={userAnswer ? userAnswer[number] : undefined}
                callback={checkAnswer}
                />
                )}
            {!gameOver && !loading && userAnswer.length === number +1 && number !==TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
                Next Question
            </button>
        ): null}
        <div>

    );
}

export default App;
