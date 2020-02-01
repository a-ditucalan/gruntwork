import React from "react"

import { InputGroup, InputGroupAddon, Button } from "reactstrap"
import CommonInput from "./CommonInput"

const GroupInput = ({
  image,
  name,
  type,
  onChange,
  onSubmit,
  value,
  placeholder,
  style,
  btnStyle,
  btnName,
  children
}) => {
  return (
    <div className="groupinput">
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button onClick={onSubmit} name={btnName} className={btnStyle}>
            <img src={image} alt="search" />
          </Button>
        </InputGroupAddon>
        <CommonInput
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          style={style}
        />
        {children && (
          <InputGroupAddon addonType="append">{children}</InputGroupAddon>
        )}
      </InputGroup>
    </div>
  )
}

export default GroupInput
