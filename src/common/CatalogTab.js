import React from "react"
import classnames from "classnames"

import Aws from "../assets/svg/aws.svg"
import GoogleCloud from "../assets/svg/gc.svg"
import Azure from "../assets/svg/azure.svg"

const CatalogTab = ({ onClickTab, activeTab }) => {
  return (
    <div className="service-catalog__app">
      <div
        onClick={onClickTab}
        data-img="aws"
        className={classnames("service-catalog__app-item", {
          active: activeTab === "aws"
        })}
      >
        <img onClick={onClickTab} src={Aws} data-img="aws" alt="logo" />
      </div>
      <div
        onClick={onClickTab}
        data-img="google-cloud"
        className={classnames("service-catalog__app-item", {
          active: activeTab === "google-cloud"
        })}
      >
        <img
          onClick={onClickTab}
          src={GoogleCloud}
          data-img="google-cloud"
          alt="logo"
        />
      </div>
      <div
        onClick={onClickTab}
        data-img="azure"
        className={classnames("service-catalog__app-item", {
          active: activeTab === "azure"
        })}
      >
        <img onClick={onClickTab} src={Azure} data-img="azure" alt="logo" />
      </div>
    </div>
  )
}

export default CatalogTab
