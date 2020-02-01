import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

function SidebarLinkFolders({ content }) {
  function scrollHandler() {
    var sidebar = document.getElementById("preview__container-id")
    var fixedSidebar = sidebar.offsetTop
    var content = document.getElementById("preview__container-id")
    var fixedContent = content.scrollHeight + 100

    console.log(content.scrollHeight)
    // if (windowWidth < 991) {
    if (window.pageYOffset >= fixedSidebar) {
      document
        .querySelector(".link-folders")
        .classList.add("link-folders--fixed")
    } else {
      document
        .querySelector(".link-folders")
        .classList.remove("link-folders--fixed")
    }

    if (window.pageYOffset >= fixedContent) {
      document
        .querySelector(".link-folders__wrapper")
        .classList.add("link-folders__wrapper--bottom")
      document
        .querySelector(".link-folders")
        .classList.remove("link-folders--fixed")
    } else {
      document
        .querySelector(".link-folders__wrapper")
        .classList.remove("link-folders__wrapper--bottom")
    }
    // } else {
    // }
  }

  useEffect(() => {
    // window.addEventListener('resize', scrollHandler)
    window.addEventListener("scroll", scrollHandler)

    return () => {
      // window.removeEventListener('resize', scrollHandler)
      window.removeEventListener("scroll", scrollHandler)
    }
  })

  return (
    <div id="link-folders-id" className="link-folders">
      <p className="browse-title">Browse the Repo</p>
      <ul className="link-folders__wrapper">
        {content.map((item, i) => {
          return (
            <li
              className={classnames("link-folders__item", {
                "link-folders__item--active": item.activeLink
              })}
              key={i}
            >
              <Link to={item.link} className="link-folders__link">
                <div className="link-folders__icon--holder">
                  <img
                    src={item.icon}
                    className="link-folders__icon"
                    alt={item.name}
                  />
                </div>
                <span className="link-folders__link--text">{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SidebarLinkFolders
