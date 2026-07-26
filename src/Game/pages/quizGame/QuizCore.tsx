import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Header from "./components/header/Header"
import ShowResult from "./components/result/Result"
import Question from "./components/question/Question"
import { QuizContext, allowedActions } from "../../contexts/QuizContext"
import "./quizCore.css"

const Quiz:React.FC = ():React.ReactElement => {
  
  const quizContext = useContext(QuizContext)
  const gameOver = quizContext?.state.gameOver
  const dispatch = quizContext?.dispatch
  const navigate = useNavigate()
  
  return (
    <div className="quiz-flow container">
      <div className="quiz-flow-actions">
        <button
          type="button"
          className="quiz-exit-btn"
          onClick={() => {
            dispatch && dispatch({type:allowedActions.RESET_GAME, payload:null})
            navigate("/")
          }}
        >
          Exit to Home
        </button>
      </div>
      {gameOver && (
        <ShowResult />
      )}
      
      {!gameOver && (
        <>
          <Header />
          <Question />
        </>
      )}
    </div>
  )
}

export default Quiz
