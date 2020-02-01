import React, { useState } from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

const CommonDropdown = ({ filter }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  console.log(filter)
  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{filter.title}</DropdownToggle>
      <DropdownMenu>
        {filter.data.map((i, key) => {
          return <DropdownItem key={key}>{i}</DropdownItem>
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

export default CommonDropdown
