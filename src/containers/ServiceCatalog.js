import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import GroupCard from "../common/GroupCard"
import SideBar from "../common/SideBar"
import Banner from "../common/Banner"
import GroupInput from "../common/GroupInput"
import CTA from "../common/CTA"
import {
  Docker,
  Ec2,
  Database,
  Distributed,
  OtherData,
  ServiceDiscovery,
  StaticContent,
  Monitoring,
  Log,
  Networking,
  Ci,
  ServerLess,
  Streaming,
  Secrets,
  Auth,
  Hardening,
  Foundations
} from "../lib/ServicesCards"
import { links } from "../lib/SideBarLink"

import Search from "../assets/images/search-icon.svg"
import Path from "../assets/images/path.png"
import CatalogTab from "../common/CatalogTab"
import FilterCatalog from "../common/FilterCatalog"

const ServiceCatalog = () => {
  const [searchInput, setSearchInput] = useState("")
  const [filter, setFilter] = useState([])
  const [activeTab, setActiveTab] = useState("aws")
  const [bannerInfo, setBannerInfo] = useState({
    title: "Service Catalog",
    subtext:
      "We offer reusable, commercially supported and maintained, production-grade infrastructure code written in Terraform, Go, Bash, and Python. Click on any service to get instructions on how to use the code in your infrastructure.",
    btn: "Learn More"
  })

  useEffect(() => {
    if (window.innerWidth <= 767) {
      bannerInfo["subtext"] =
        "We offer reusable, commercially supported and maintained, production-grade infrastructure code."
    } else {
      bannerInfo["subtext"] =
        "We offer reusable, commercially supported and maintained, production-grade infrastructure code written in Terraform, Go, Bash, and Python. Click on any service to get instructions on how to use the code in your infrastructure."
    }

    setBannerInfo({ ...bannerInfo })
  }, [])

  const onChangeSearch = e => {
    const value = e.target.value
    setSearchInput({ searchInput: value })
  }

  const onSubmitSearch = e => {
    console.log(searchInput)
  }

  const onClickFilter = () => {
    const mq = window.matchMedia("(min-width: 768px)")

    document
      .querySelector(".service-catalog__filter--btn")
      .classList.toggle("filter--open")

    if (mq.matches) {
      document
        .querySelector(".service-catalog__filter-holder")
        .classList.toggle("d-flex-filter")
      document
        .querySelector(".service-catalog__filter-holder")
        .classList.toggle("filter-pad")
      document
        .querySelectorAll(".service-catalog__filter-item")
        .forEach((el, i) => {
          el.classList.toggle("filter-opacity")
        })

      document
        .querySelectorAll(
          ".service-catalog__filter-holder .common-checkbox--text"
        )
        .forEach((el, i) => {
          el.classList.toggle("d-flex-filter")
        })
      document
        .querySelectorAll(".service-catalog__filter-holder .node-checkbox ")
        .forEach((el, i) => {
          el.classList.toggle("filter-height")
        })

      document
        .querySelector(".service-catalog__filter-wrapper")
        .classList.remove("service-catalog__filter-overlay")
    } else {
      document
        .querySelector(".service-catalog__filter-wrapper")
        .classList.add("d-block")
      document
        .querySelector(".service-catalog__filter-wrapper")
        .classList.add("service-catalog__filter-overlay")
      document.querySelector("body").classList.add("scroll-lock")
    }
  }

  const onClickTab = e => {
    const data = e.target.getAttribute("data-img")
    setActiveTab(data)
  }

  const onChangeNodeCheckbox = e => {
    const value = e.target.value

    console.log()
    let test = filter.indexOf(value)
    let copyfilter = filter

    const index = test

    if (index === -1) {
      copyfilter.push(value)
    } else {
      copyfilter.splice(index, 1)
    }

    setFilter(copyfilter)
  }

  const helpMeDecide = {
    title: "Not sure which option is right for you? We're here to help.",
    link: "#",
    linkText: "Help Me Decide",
    backgroundBlueA: true,
    buttonWhite: true
  }

  return (
    <div className="service-catalog">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Service Catalog</title>
      </Helmet>
      <Banner bannerInfo={bannerInfo} />
      <div className="service-catalog__wrapper">
        <div className="custom-container">
          <div className="service-catalog__filter">
            <GroupInput
              image={Search}
              type="text"
              placeholder="Search catalogue..."
              name="searchInput"
              btnStyle="btn-search"
              onChange={onChangeSearch}
              btnName="searchSubmit"
              onSubmit={onSubmitSearch}
            >
              <button
                onClick={onClickFilter}
                className="service-catalog__filter--btn"
              >
                Filter
                <img src={Path} className="arrow--left" alt="path" />
              </button>
            </GroupInput>
          </div>
          <FilterCatalog onChangeNodeCheckbox={onChangeNodeCheckbox} />
          <CatalogTab onClickTab={onClickTab} activeTab={activeTab} />
        </div>
        <div
          id="service-catalog__content-id"
          className="service-catalog__content"
        >
          {activeTab === "aws" ? <SideBar sidebar={links} /> : ""}

          <div className="service-catalog__cards">
            <div className="custom-container">
              {activeTab === "aws" ? (
                <div className="groupcard-wrapper">
                  <GroupCard card={Docker} />
                  <GroupCard card={Ec2} />
                  <GroupCard card={Database} />
                  <GroupCard card={Distributed} />
                  <GroupCard card={OtherData} />
                  <GroupCard card={ServiceDiscovery} />
                  <GroupCard card={StaticContent} />
                  <GroupCard card={Monitoring} />
                  <GroupCard card={Log} />
                  <GroupCard card={Networking} />
                  <GroupCard card={Ci} />
                  <GroupCard card={ServerLess} />
                  <GroupCard card={Streaming} />
                  <GroupCard card={Secrets} />
                  {/* <GroupCard card={Secrets} /> */}
                  <GroupCard card={Auth} />
                  <GroupCard card={Hardening} />

                  <GroupCard card={Foundations} />
                </div>
              ) : activeTab === "google-cloud" ? (
                <div>google cloud</div>
              ) : activeTab === "azure" ? (
                <div>azure</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <CTA content={helpMeDecide} />
    </div>
  )
}

export default ServiceCatalog
