import React from "react"
import classnames from "classnames"

const Details = ({ content }) => {
  return (
    <div className="details__section">
      <div className="custom-container">
        <div className="details__image--wrapper">
          <img
            src={content.image}
            className="details__image"
            alt={content.name}
          />
        </div>
        <div className="details__text--wrapper">
          {content.hasTitle ? (
            <h2 className="details__title">{content.title}</h2>
          ) : (
            ""
          )}
          <p
            className={classnames("details__description", {
              "details__description--gray": content.descriptionGray,
              "details__description--black": content.descriptionBlack
            })}
          >
            {content.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
