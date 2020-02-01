import React from "react"

const CommonButtons = ({ btnClass, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={`button  ${btnClass}`}>
        {text}
      </button>
    </div>
  )
}

export default CommonButtons
