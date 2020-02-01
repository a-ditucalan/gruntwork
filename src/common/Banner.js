import React from "react"
import CommonButtons from "./CommonButtons"

const Banner = ({ bannerInfo }) => {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <h1 className="banner--title">{bannerInfo.title}</h1>
        <p className="banner--subtext">{bannerInfo.subtext}</p>
        <CommonButtons
          btnClass="btn-hover banner--btn btn-text"
          text={bannerInfo.btn}
        />
      </div>
    </div>
  )
}

export default Banner
