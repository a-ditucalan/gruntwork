import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

import Breadcrumb from "./Breadcrumb"
import { breadcrumbLinks } from "../lib/ServiceDetailsInfo"

import Down from "../assets/images/Path Copy.png"

function Preview({ content }) {
  const onClickActive = e => {
    console.log(e.target)
    document
      .querySelector(".preview__link-menu-wrapper")
      .classList.add("d-flex")
    document.querySelector("body").classList.add("scroll-lock")
  }

  return (
    <div className="preview">
      <div className="custom-container">
        <div
          className={classnames("preview__wrapper", {
            "preview--more": content.previewOpacity
          })}
        >
          <div className="preview__header preview__header-desktop">
            <div className="preview__header__title">
              <h2 className="preview__header__title--item">Preview the Code</h2>
            </div>
            <Breadcrumb content={breadcrumbLinks} />
          </div>
          <div
            onClick={onClickActive}
            className="preview__header preview__header-mobile"
          >
            <div className="preview__header__title">
              <h2 className="preview__header__title--item">Preview the Code</h2>
            </div>
            <div className="preview__header--content">
              <img
                src={content.icon}
                className="preview__icon"
                alt={content.name}
              />
              <p onClick={onClickActive} className="preview__title">
                {content.title}
              </p>
              <img className="down" src={Down} alt="down" />
            </div>
          </div>
          <div
            className={classnames("preview__body", {
              "preview--opacity": content.previewOpacity
            })}
          >
            {content.body}
          </div>
          {content.hasButton ? (
            <div className="button__holder">
              <Link to={content.link} className="button button--gradient-blue">
                {content.buttonText}
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
