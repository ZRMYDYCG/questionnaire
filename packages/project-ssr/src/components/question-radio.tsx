import React from 'react'

interface PropsType {
  fe_id: string
  props: {
    title: string
    options: Array<{
      value: string
      text: string
    }>
    value: string
    isVertical: boolean
  }
}

const QuestionRadio: React.FC<PropsType> = ({ fe_id, props }) => {
  const { title, options = [], value, isVertical } = props

  return (
    <>
      <p>{title}</p>

      <ul className={isVertical ? 'mb-2' : 'mr-2 flex gap-2'}>
        {options.map((option) => {
          const { value: val, text } = option

          return (
            <li key={val}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
                {text}
              </label>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default QuestionRadio
