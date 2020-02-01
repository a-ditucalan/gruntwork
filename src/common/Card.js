import React, { Fragment, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

import ServicesCatalogPopUp from "./ServicesCatalogPopUp"
import CommonButtons from "./CommonButtons"

const Card = ({ data }) => {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal(!modal)
  }

  const [limit, setLimit] = useState(500)
  const ellipsisFunction = () => {
    if (window.innerWidth <= 453) {
      setLimit(50)
    } else if (window.innerWidth <= 692) {
      setLimit(100)
    } else if (window.innerWidth <= 827) {
      setLimit(150)
    } else {
      setLimit(500)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", function() {
      ellipsisFunction()
    })

    window.addEventListener("load", function() {
      ellipsisFunction()
    })

    return () => {
      window.removeEventListener("resize", function() {
        ellipsisFunction()
      })

      window.removeEventListener("load", function() {
        ellipsisFunction()
      })
    }
  }, [])

  const handleClose = close => {
    setModal(close)
  }

  return (
    <Fragment>
      {data.type === "1" ? (
        <div className="cardbox cardbox--single cardbox-pad">
          <div className="cardbox__item">
            <div className="cardbox__img--img">
              <img src={data.image} alt="logo" />
            </div>
            <div className="cardbox__description--single">
              <p className="cardbox--suggestion">
                Not built yet - work with us
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  color="#36b6fb"
                  size="1x"
                />
              </p>
              <h3 className="cardbox__title title-card ">{data.cardTitle}</h3>
              {/* <Dotdotdot clamp={2}> */}
              <p className="cardbox__sub-text text-card ">
                {/* {data.cardDescription}   */}
                {data.cardDescription.substring(0, limit) + "..."}{" "}
                <Link to={data.link}>Contact Us</Link>
              </p>
              {/* </Dotdotdot> */}
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="cardbox cardbox--set">
            <div className="cardbox__item">
              <div className="cardbox__img">
                <div className="cardbox__img-holder">
                  <img src={data.image} alt="logo" />
                </div>
              </div>
              <div className="cardbox__description">
                {data.cardSubscribe === "1" ? (
                  <p className="cardbox--subscriber blue">Grunt Subscriber</p>
                ) : (
                  <p className="cardbox--subscriber green">Gruntwork Free</p>
                )}
                <h3 className="cardbox__title title-card ">{data.cardTitle}</h3>
                {/* <Dotdotdot clamp={2}> */}
                <p className="cardbox__sub-text text-card ">
                  {/* {data.cardDescription} */}
                  {data.cardDescription.substring(0, limit) + "..."}
                </p>
                {/* </Dotdotdot> */}
              </div>
              {/* <div className="cardbox__rating">
                <div className="cardbox__item">
                  {data.community === "1" ? (
                    <GreenStar />
                  ) : data.community === "2" ? (
                    <StarYellow />
                  ) : data.communuty === "3" ? (
                    <StarRed />
                  ) : null}
                </div>
                <div className="cardbox__item">
                  {data.ease === "1" ? (
                    <GreenStar />
                  ) : data.ease === "2" ? (
                    <StarYellow />
                  ) : data.ease === "3" ? (
                    <StarRed />
                  ) : null}
                </div>
                <div className="cardbox__item">
                  {data.maturity === "1" ? (
                    <GreenStar />
                  ) : data.maturity === "2" ? (
                    <StarYellow />
                  ) : data.maturity === "3" ? (
                    <StarRed />
                  ) : null}
                </div>
                <div className="cardbox__item">
                  {data.dollar === "1" ? (
                    <GreenStar />
                  ) : data.dollar === "2" ? (
                    <StarYellow />
                  ) : data.dollar === "3" ? (
                    <StarRed />
                  ) : null}
                </div>
              </div> */}
            </div>
            <div className="cardbox__source">
              <p className="cardbox__source--text text-card">
                Lines of code: 4,357 • Version: v4.3.5 • Built with Terraform
              </p>
              <CommonButtons
                btnClass="btn-blue-hover cardbox__source--btn btn--text"
                text="View & Edit Source Code"
                onClick={toggle}
              />
              <ServicesCatalogPopUp
                modal={modal}
                handleClose={handleClose}
                toggle={toggle}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Card
