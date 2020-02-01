import React from "react"

import { Input } from "reactstrap"

const CommonInput = ({
  type = "text",
  name,
  value,
  style,
  onChange,
  placeholder
}) => {
  return (
    <Input
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`input-${style}`}
    />
  )
}

export default CommonInput
