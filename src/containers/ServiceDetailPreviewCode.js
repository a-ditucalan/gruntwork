import React from "react"
import CTA from "../common/CTA"
import Details from "../common/Details"
import Breadcrumb from "../common/Breadcrumb"
import Preview from "../common/Preview"
import SidebarLinkFolders from "../common/SidebarLinkFolders"
import SideBarFolderMobile from "../common/SideBarFolderMobile"
import { Helmet } from "react-helmet"

const buyNow = {
  title: "Ready to hand off the Gruntwork?",
  link: "#",
  linkText: "Buy Now",
  hasImage: true,
  image: require("../assets/images/img-grunty-footer.png"),
  backgroundBlueB: true,
  buttonWhite: true,
  absoluteImage: true
}

const question = {
  title: "Questions? Ask away.",
  hasDescription: true,
  description:
    "We're here to talk about our services, answer any questions, give advice, or just to chat.",
  link: "#",
  linkText: "Contact",
  hasImage: true,
  image: require("../assets/svg/img-questions-puzzle.svg"),
  buttonTransparent: true,
  backgroundWhite: true
}

const details = {
  image: require("../assets/images/img-kubernetes.png"),
  name: "Kubernetes",
  hasTitle: true,
  title: "Kubernetes",
  description:
    "Deploy Kubernetes on top of Amazon EC2 Kubernetes Service (EKS).",
  descriptionGray: true,
  hasAdditionalDetails: true,
  data: [
    {
      icon: require("../assets/svg/icn-license.svg"),
      name: "license icon",
      title: "License",
      description: "Open Source",
      descriptionBlue: true
    },
    {
      icon: require("../assets/svg/icn-compliance.svg"),
      name: "compliance icon",
      title: "Compliance",
      description: "HIPPA",
      descriptionBlue: true
    },
    {
      icon: require("../assets/svg/icn-latest-release.svg"),
      name: "latest release icon",
      title: "Latest release",
      description: "3.2.4"
    }
  ]
}

const breadcrumbLinks = [
  {
    link: "#",
    title: "Service Catalog"
  },
  {
    link: "#",
    title: "AWS"
  },
  {
    link: "#",
    title: "Docker Cluster"
  },
  {
    link: "#",
    title: "Kubernetes"
  }
]

const linkFolder = [
  {
    icon: require("../assets/svg/icn-readme-folder.svg"),
    name: "readme icon",
    link: "#",
    title: "README.md"
  },
  {
    icon: require("../assets/svg/icn-repo-folder.svg"),
    name: "folder icon",
    link: "#",
    title: ".circleci"
  },
  {
    icon: require("../assets/svg/icn-repo-folder.svg"),
    name: "folder icon",
    link: "#",
    title: "examples"
  },
  {
    icon: require("../assets/svg/icn-locked-code.svg"),
    name: "locked code icon",
    link: "#",
    title: "main.tf",
    activeLink: true
  }
]

const file = {
  icon: require("../assets/svg/icn-readme.svg"),
  name: "readme icon",
  title: "main.tf (preview)",
  body: (
    <div className="preview__body--content">
      <div>
        {/* <img src={require('../assets/images/preview-codes.png')} className="preview__code" alt="code" />
         */}

        <ul className="code__list">
          <li className="code__item">
            <span className="code__text">
              # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </span>
          </li>
          <li className="code__item">
            <span className="code__text">
              # DEPLOY A EKS CLUSTER WITH EC2 INSTANCE AS WORKERS
            </span>
          </li>
          <li className="code__item">
            <span className="code__text"># These templtes show an</span>
          </li>
          <li className="code__item">
            <span className="code__text"># Autoscaling Group</span>
          </li>
          <li className="code__item">
            <span className="code__text">
              # ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </span>
          </li>
          <li className="code__item" />
          <li className="code__item" />
          <li className="code__item">
            <span className="code__text"># This module has been</span>
          </li>
          <li className="code__item" />
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
          <li className="code__item">
            <span className="code__text">Sample Code</span>
          </li>
        </ul>
      </div>
    </div>
  ),
  previewOpacity: true,
  hasButton: true,
  link: "#",
  buttonText: "Subscribe to View Code"
}
function ServiceDetailPreviewCode() {
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
        <title>Service Detail Preview Code</title>
      </Helmet>
      <div
        id="service-detail__container-id"
        className="service-detail__container"
      >
        <SideBarFolderMobile
          onClickLink={onClickLink}
          linkFolder={linkFolder}
          file={file}
        />

        <div className="service-detail__content">
          <Breadcrumb content={breadcrumbLinks} />
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

export default ServiceDetailPreviewCode
