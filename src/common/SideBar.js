import React, { useEffect } from "react"
import { NavHashLink as NavLink } from "react-router-hash-link"
import Scrollspy from "react-scrollspy"

const SideBar = ({ sidebar }) => {
  function scrollHandler() {
    var sidebar = document.getElementById("service-catalog__content-id")
    var fixedSidebar = sidebar.offsetTop
    var content = document.getElementById("service-catalog__content-id")
    var fixedContent = content.scrollHeight - 320

    console.log(content.scrollHeight)

    if (window.pageYOffset >= fixedSidebar) {
      document.querySelector(".sidebar").classList.add("sidebar--fixed")
    } else {
      document.querySelector(".sidebar").classList.remove("sidebar--fixed")
    }

    if (window.pageYOffset >= fixedContent) {
      document
        .querySelector(".sidebar__wrapper")
        .classList.add("sidebar__wrapper--bottom")
      document.querySelector(".sidebar").classList.remove("sidebar--fixed")
    } else {
      document
        .querySelector(".sidebar__wrapper")
        .classList.remove("sidebar__wrapper--bottom")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  })

  // sidebar.forEach((item, i) => {
  //   sidebarLinks.push(item.link)
  // }

  // const sidebarLinks = Object.entries(item.link)
  // .sidebar(([item, i]) => desiredValues[link])
  // .map(([ item, i ]) => ({ item: item.link, i }))
  // console.log(sidebarLinks)

  return (
    <div id="sidebar" className="sidebar">
      <ul className="sidebar__wrapper">
        <Scrollspy
          //
          items={[
            "docker",
            "ec2",
            "database",
            "distributed",
            "otherData",
            "serviceDiscovery",
            "staticContent",
            "monitoring",
            "log",
            "networking",
            "ci",
            "serverless",
            "streaming",
            "secrets",
            "auth",
            "hardening",
            "foundation"
          ]}
          // items={sidebarLinks}
          currentClassName="link--active"
        >
          {sidebar.map((item, i) => {
            return (
              <li className="sidebar__item" key={i}>
                <NavLink
                  smooth
                  to={`#${item.link}`}
                  className="sidebar__link"
                  // className={classnames("sidebar__link", {
                  //   "link--active": item.activeLink
                  //= })}
                >
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </Scrollspy>
      </ul>
    </div>
  )
}

export default SideBar
