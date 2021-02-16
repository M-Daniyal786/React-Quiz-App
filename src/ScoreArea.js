import React from 'react'

function ScoreArea(props) {
    return (
        <div className="scorewrapper">
            <h3 className="correct">Correct: {props.correct}  </h3>
            <h3 className="incorrect">Incorrect: {props.incorrect}</h3>
        </div>
    )
}

export default ScoreArea
