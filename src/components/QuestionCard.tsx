import React from "react";
//Types
import { AnswerObject} from "../App";

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestion: number;
}
const QuestionCard: React.FC<Props> = ({
question,
answers,
callback,
userAnswer,
questionNr,
totalQuestion,
}: Props) => (
    <div className={"questionWrapper"}>
        <p className="number">
            Question: {questionNr} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} className={"questions"}/>
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={!!userAnswer}  value= {answer} className={"answerOptions"} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;