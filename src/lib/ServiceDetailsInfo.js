import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import PortraitCard from "../common/PortraitCard"

export const buyNow = {
  title: "Ready to hand off the Gruntwork?",
  link: "#",
  linkText: "Buy Now",
  hasImage: true,
  image: require("../assets/images/img-grunty-footer.png"),
  backgroundBlueB: true,
  buttonWhite: true,
  absoluteImage: true
}

export const question = {
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

export const details = {
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

export const breadcrumbLinks = [
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
  },
  {
    link: "#",
    title: "README.md"
  }
]

export const linkFolder = [
  {
    icon: require("../assets/svg/icn-readme-folder.svg"),
    name: "readme icon",
    link: "#",
    title: "README.md",
    activeLink: true
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
  }
]

export const analysis = [
  {
    title: "Popularity",
    description: (
      <span>
        Most popular Docker orchestration tool available. Has XXX stars on
        GitHub and YYY questions on StackOverflow. <br />
        <br />
        See Google Trends comparison.
      </span>
    ),
    data: [
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      }
    ]
  },
  {
    title: "Maturity",
    description: (
      <span>
        First released in 2014. Based on years of Google Borg experience before
        that. Huge community actively using it in production and evolving
        rapidly. Current version is v1.15. Stable API and backwards
        compatibility.
      </span>
    ),
    data: [
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      }
    ]
  },
  {
    title: "Ease of use",
    description: (
      <span>
        It's a large, complicated project, with a ton to learn. The control
        plane is fully managed; worker nodes are self-managed.
      </span>
    ),
    data: [
      {
        icon: require("../assets/svg/red-star.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/images/grey-star.png"),
        name: "green star"
      },
      {
        icon: require("../assets/images/grey-star.png"),
        name: "green star"
      }
    ]
  },
  {
    title: "Features",
    description: (
      <span>
        Supports service discovery, secrets management, zero-downtime
        deployments, stateless and stateful services, and much more.
      </span>
    ),
    data: [
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      }
    ]
  },
  {
    title: "Portability",
    description: (
      <span>
        Kubernetes works on any cloud and on prem. Can run in dev environment
        too for easy testing.
      </span>
    ),
    data: [
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      },
      {
        icon: require("../assets/svg/star-green.svg"),
        name: "green star"
      }
    ]
  }
]

export const file = {
  icon: require("../assets/svg/readme.svg"),
  name: "folder icon",
  title: "README.md",
  body: (
    <div className="preview__body--content">
      <h2 className="preview__body--title">EKS Modules</h2>
      <div className="preview__body--border" />
      <p className="preview__body--description">
        This repo contains a Module for running Kubernetes clusters on{" "}
        <Link to="#" className="preview__body--description--blue">
          AWS
        </Link>{" "}
        using{" "}
        <Link to="#" className="preview__body--description--blue">
          Elastic Container Service for Kubernetes Cluster{" "}
        </Link>{" "}
        with{" "}
        <Link to="#" className="preview__body--description--blue">
          Terraform.
        </Link>
      </p>
      <img
        src={require("../assets/images/map.png")}
        className="preview__body--diagram"
        alt="map"
      />
      <p className="preview__body--description">
        This repo is a part of the{" "}
        <Link to="#" className="preview__body--description--blue">
          Gruntwork Infrastructure as Code Library
        </Link>{" "}
        , a collection of reusable, battle-tested, production ready
        infrastructure code. Read the{" "}
        <Link to="#" className="preview__body--description--blue">
          Gruntwork Philosophy
        </Link>{" "}
        document to learn more about how Gruntwork builds production grade
        infrastructure code.
      </p>

      <h3 className="preview__body--subtitle">What is in this repo</h3>
      <p className="preview__body--description--light">
        This repo provides a Gruntwork IaC Package and has the following folder
        structure:
      </p>

      <div className="preview__body--box">
        <img
          src={require("../assets/images/Bitmap (63).png")}
          className="preview__body--box__icon"
          alt="icon"
        />
        <div className="preview__body--box__text">
          <h4 className="preview__body--box__title">
            Deploying a Production Grade EKS Cluster
          </h4>
          <p className="preview__body--box__description">
            Learn how to use Gruntwork modules to deploy and manage a
            production-grade EKS cluster. Includes: network topology, worker ASG
            pools, IAM roles and RBAC.
          </p>
        </div>

        <div className="btn-arrow">
          <Link to="#" className="preview__body--box__button">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="preview__body--box__icon"
            />
          </Link>
        </div>

        {/* <img
            src={require("../assets/images/btn-expand-section.png")}
            className="preview__body--box__icon"
            alt="btn expand"
          /> */}
      </div>

      <h3 className="preview__body--subtitle">Gruntwork Analysis</h3>
      <PortraitCard content={analysis} />
      <Link to="#" className="preview__body--link">
        See how Kubernetes compares to other Docker clusters on AWS
        <img
          src={require("../assets/images/btn-text-arrow.png")}
          className="arrow--right"
          alt="right arrow"
        />
      </Link>
    </div>
  )
}
