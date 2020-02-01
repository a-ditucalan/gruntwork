import React from "react"

const CommonCheckbox = ({ onChange, checked, text, checkboxStyle }) => {
  return (
    <div className="common-checkbox">
      <label className="common-checkbox--text">
        {text}
        <input
          className={checkboxStyle}
          onChange={onChange}
          type="checkbox"
          value={text}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default CommonCheckbox
