import "./header.css"
import { QuizContext } from "../../../../contexts/QuizContext"
import { FC, ReactElement, useContext } from "react"
import { getLifeIcons } from "../../../../helpers/getIcons"

const Header:FC = (): ReactElement => {
  
  const quizContext = useContext(QuizContext)
  
  const score = quizContext?.state.score
  const totalQuestions = quizContext?.state.questions.length 
  const currentQuestionIndex = quizContext?.state.currentQuestionIndex
  const currentQuestionIndexShow = currentQuestionIndex! + 1 
  const progress = Math.round((currentQuestionIndexShow / totalQuestions!) * 100)
  const life = quizContext!.state.life

  return (
    <>
      <div className="header container surface-card">
        <div className="header-topline">
          <span className="score">Score: {score}</span>
          <span className="index">Question {currentQuestionIndexShow} of {totalQuestions}</span>
          <span className="progress-percentage">{progress}%</span>
        </div>
        <div className="progress-track">
          <span style={{width: `${progress}%`}} />
        </div>
        <span className="life-wrap">{getLifeIcons(life)}</span>
      </div>
    </>
  )
}

export default Header
