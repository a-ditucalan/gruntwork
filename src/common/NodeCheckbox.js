import React from "react"
import CommonCheckbox from "./CommonCheckbox"

const NodeCheckbox = ({ checkboxlist, name, onChange }) => {
  return (
    <div className="node-checkbox" name={name}>
      {checkboxlist.map((checkbox, index) => {
        return (
          <CommonCheckbox onChange={onChange} key={index} text={checkbox} />
        )
      })}
    </div>
  )
}

export default NodeCheckbox
