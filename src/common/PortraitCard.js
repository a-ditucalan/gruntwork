import React from "react"

const PortraitCard = ({ content }) => {
  return (
    <div className="portrait-card__section">
      {content.map((item, i) => {
        return (
          <div className="portrait-card" key={i}>
            <h5 className="portrait-card__title">{item.title}</h5>
            <div className="portrait-card__wrapper">
              <div className="portrait-card__stars--holder">
                {item.data.map((star, j) => {
                  return (
                    <div className="portrait-card__star" key={j}>
                      <img
                        src={star.icon}
                        className="portrait-card__star--icon"
                        alt={star.name}
                      />
                    </div>
                  )
                })}
              </div>
              <p className="portrait-card__description">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PortraitCard
