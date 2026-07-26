import "./topics.css"
import {useState, useEffect, useContext} from "react"
import type {FC, ReactElement} from "react"
import {topics as avalibleTopicsData } from "../../randomdata";
import {useNavigate} from "react-router-dom"
import {UniversalContext, TopicInterface} from "../../contexts/UniversalContext"

interface SingleTopicProps {
  topic: string;
  isSelected: boolean;
  onSelectTopic: (topic:string) => void;
}

const SingleTopic:FC<SingleTopicProps> = (props):ReactElement => {
  
  return (
    <div 
      className={`topic ${props.isSelected ? "topic-selected" : ""}`}
      onClick={() => {
        props.onSelectTopic(props.topic)
      }}
    >
      <div className="topic-icon">
        <span>QZ</span>
      </div>
      
      <div className="topic-details">
        <input className="checkTopic" type="checkbox" checked={props.isSelected} readOnly />
        <span className="topic-name">{props.topic}</span>
      </div>

    </div>
  )
}

const Topics:FC = ():ReactElement => {
  
  const universalContext = useContext(UniversalContext)
  const setSelectedTopics = universalContext!.setSelectedTopics
  
  const [avalibleTopics, setAvalibleTopics] = useState<Array<TopicInterface>>([])
  useEffect(() => {
    const newAvalibleTopics =  avalibleTopicsData.map(topic => {
      return {topic, isSelected: false}
    })
    setAvalibleTopics(newAvalibleTopics)
  }, [])
  
  const handleOnSelectTopic = (selectedTopic:string) => {
    const newAvalibleTopics = avalibleTopics.map(topic => {
      return selectedTopic ===  topic.topic 
        ? {...topic, isSelected: !topic.isSelected}
        : topic 
    })
    setAvalibleTopics(newAvalibleTopics)
    const newSelectedTopics = newAvalibleTopics.filter(topic => {
      return topic.isSelected
    })
    
    setSelectedTopics(newSelectedTopics)
  }
  
  const selectedTopicsCount = avalibleTopics
    .filter(topic => {
      return topic.isSelected 
    })
    .length

  const navigate = useNavigate()
  return (
    <div className="topics-wrap container">
      <div className="welcome-wrap surface-card">
        <span className="welc-message">Cyber Defense Briefing</span>
        <span className="welc-heading"><strong>Cybersecurity Quiz</strong></span>
        <span className="welc-feeling">Study a subject: cybersecurity, coding, physical security, patching, responsible data handling, privacy</span>
      </div>  
      
      <div className="topics">
        {
          avalibleTopics.map((topic, index) => (
            <SingleTopic 
              topic={topic.topic} 
              isSelected={topic.isSelected}
              key={index}
              onSelectTopic={topic => handleOnSelectTopic(topic)}
            />
          ))
        } 
      </div>
      <div className="actions-btns">
        <button 
          className={`start-btn ${selectedTopicsCount > 0 ? "" : "disabled-btn"}`}
          onClick={() => navigate("/play")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  )
}

export default Topics
