import React from 'react'
import AnswerList from './AnswerList'
import Question from './Question'


function QuizArea(props) {
 
    if(props.isFinished){
        if(props.correct >=2)
        {
            return <h2 className="usergreeting">You Passed the quiz.</h2>
        }
        else{
            return <h2 className="usergreeting">You Failed the quiz.</h2>
        }
    }
    else{
    return (
        <div>
            <Question dataSet = {props.dataSet} current = {props.current} />
            <AnswerList handleClick= {props.handleClick} dataSet = {props.dataSet}/>                 
        </div>
    )
}
}

export default QuizArea
