import React from "react"
import StarGreen from "../assets/images/star-green.png"
import YellowStar from "../assets/images/yellow-star.png"
import GreyStar from "../assets/images/grey-star.png"
import RedStar from "../assets/images/red-star.png"

const GreenStar = () => {
  return (
    <div className="left-star">
      <img src={StarGreen} alt="green" />
      <img src={StarGreen} alt="green" />
      <img src={StarGreen} alt="green" />
    </div>
  )
}

const StarYellow = () => {
  return (
    <div className="left-star">
      <img src={YellowStar} alt="yellow" />
      <img src={YellowStar} alt="yellow" />
      <img src={GreyStar} alt="grey" />
    </div>
  )
}

const StarRed = () => {
  return (
    <div className="left-star">
      <img src={RedStar} alt="yellow" />
      <img src={GreyStar} alt="grey" />
      <img src={GreyStar} alt="grey" />
    </div>
  )
}

const ModalCard = ({ title }) => {
  return (
    <div className="groupcard__pop-up">
      <h3 className="groupcard__pop-up--title">{title}</h3>
      <div className="groupcard__pop-up-holder">
        <GreenStar />
        <p className="groupcard__pop-up--desc text-card">
          Text about what green stars mean for cost. This is useful information
          so users can make up their minds.
        </p>
      </div>
      <div className="groupcard__pop-up-holder">
        <StarYellow />
        <p className="groupcard__pop-up--desc text-card">
          Text about what green stars mean for cost. This is useful information
          so users can make up their minds.
        </p>
      </div>
      <div className="groupcard__pop-up-holder">
        <StarRed />
        <p className="groupcard__pop-up--desc text-card">
          Text about what green stars mean for cost. This is useful information
          so users can make up their minds.
        </p>
      </div>
    </div>
  )
}
export default ModalCard
