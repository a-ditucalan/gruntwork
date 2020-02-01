import React from "react"
import Card from "./Card"
// import Arrow from "../assets/images/btn-text-arrow.png"

// import ModalCard from "./modalCard"

const GroupCard = ({ card }) => {
  return (
    <div id={card.data[0].id} className={`group-card ${card.data[0].id}`}>
      <h3 className="group-card__title title">{card.title}</h3>
      {/* <div className="group-card__comparison">
        <p className="group-card__comparison--text text-card">
          Detailed Comparison <img src={Arrow} alt="arrow" />
        </p>
        <div className="empty-space"></div>
        <div className="group-card__comparison-holder">
          <div className="text-card group-card--subtext">
            <span onClick={onClickModal}>Community</span>
            <ModalCard title="Community" />
          </div>
          <div className="text-card group-card--subtext">
            <span onClick={onClickModal}>Ease of Use</span>
            <ModalCard title="Ease of Use" />
          </div>
          <div className="text-card group-card--subtext">
            <span onClick={onClickModal}>Maturity</span>
            <ModalCard title="Maturity" />
          </div>
          <div className="text-card group-card--subtext">
            <span onClick={onClickModal}>$$$</span>
            <ModalCard title="$$$" />
          </div>
        </div>
      </div> */}
      {card.data.map((data, key) => {
        return <Card key={key} data={data} />
      })}
    </div>
  )
}

export default GroupCard
