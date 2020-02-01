import React from "react"
import NodeCheckbox from "./NodeCheckbox"

import Times from "../assets/images/times.png"

const FilterCatalog = ({ onChangeNodeCheckbox, mobile = "", desktop = "" }) => {
  const onClose = () => {
    document
      .querySelector(".service-catalog__filter-wrapper")
      .classList.remove("d-block")
    document.querySelector("body").classList.remove("scroll-lock")
    document
      .querySelector(".service-catalog__filter--btn")
      .classList.remove("filter--open")

    document
      .querySelector(".service-catalog__filter-wrapper")
      .classList.remove("service-catalog__filter-overlay")
  }

  return (
    <div className="service-catalog__filter-wrapper">
      <div className="service-catalog__filter-title">
        <div className="service-catalog__filter--item">
          <p className="service-catalog__filter--text">
            Service Catalog Filter
          </p>
        </div>
        <div className="times">
          <img onClick={onClose} src={Times} alt="times" />
        </div>
      </div>
      <div className={`service-catalog__filter-holder ${desktop} ${mobile}`}>
        {/* <div className="service-catalog__filter-list" /> */}
        <div className="service-catalog__filter-item">
          {/* <div className="service-catalog__filter-item--wrapper"> */}
          <h3 className="service-catalog__filter-item--title sub-h3">
            License
          </h3>

          <NodeCheckbox
            onChange={onChangeNodeCheckbox}
            name="filter"
            checkboxlist={["Gruntwork Free Tier", "Gruntwork Subscriber"]}
          />
          {/* </div> */}
        </div>
        <div className="service-catalog__filter-item">
          {/* <div className="service-catalog__filter-item--wrapper"> */}
          <h3 className="service-catalog__filter-item--title sub-h3">
            Services built with
          </h3>
          <NodeCheckbox
            onChange={onChangeNodeCheckbox}
            name="filter"
            checkboxlist={["Terraform", "Go", "Python", "Bash"]}
          />
          {/* </div> */}
        </div>
      </div>
      <div className="button btn-apply-holder">
        <button className="btn-apply">Apply</button>
      </div>
    </div>
  )
}

export default FilterCatalog
