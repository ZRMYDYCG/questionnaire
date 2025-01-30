import React from "react"
import useLoadQuestionData from "../../../hooks/useLoadQuestionData.ts"

const Statistics: React.FC = () => {
  const { loading, questionData }= useLoadQuestionData()

  return (
      <div>
        {loading ? <div>Loading...</div> : <div>{JSON.stringify(questionData)}</div>}
      </div>
  )
}

export default Statistics
