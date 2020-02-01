import React from "react"
import { Helmet } from "react-helmet"

import CTA from "../common/CTA"
import Details from "../common/Details"
import Preview from "../common/Preview"
import SidebarLinkFolders from "../common/SidebarLinkFolders"
import SideBarFolderMobile from "../common/SideBarFolderMobile"

import {
  buyNow,
  question,
  details,
  linkFolder,
  file
} from "../lib/ServiceDetailsInfo"

const ServiceDetail = () => {
  const onClickLink = e => {
    document
      .querySelector(".preview__link-menu-wrapper")
      .classList.remove("d-flex")
    document.querySelector("body").classList.remove("scroll-lock")
  }

  return (
    <main className="service-detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Service Detail</title>
      </Helmet>
      <div className="service-detail__container">
        <SideBarFolderMobile
          onClickLink={onClickLink}
          linkFolder={linkFolder}
          file={file}
        />

        <div className="service-detail__content">
          <Details content={details} />
          <div id="preview__container-id" className="preview-container">
            <SidebarLinkFolders content={linkFolder} />
            <Preview content={file} />
            <CTA content={question} />
          </div>
        </div>
      </div>
      <CTA content={buyNow} />
    </main>
  )
}

export default ServiceDetail
