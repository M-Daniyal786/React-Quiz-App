import React from 'react'

function Question(props) {
    return (
        <div>
            <h2 className ="questions">{props.dataSet.question}</h2>
        </div>
    )
}

export default Question
