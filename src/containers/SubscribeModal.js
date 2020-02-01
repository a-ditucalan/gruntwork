/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react"
import Subscribe from "../common/Subscribe"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { Helmet } from "react-helmet"

const modalContent = {
  mainTitle: "Subscribe to Gruntwork",
  list: [
    {
      title: "Gruntwork Service Catalog",
      description:
        "Get access to over 300,000 lines of reusable, battle-tested, production-grade infrastructure code for AWS and GCP.",
      link: "#"
    },
    {
      title: "Gruntwork Training Library",
      description:
        "Learn Terraform, Docker, Packer, and other DevOps topics from a series of video courses.",
      link: "#"
    },
    {
      title: "Gruntwork Support",
      description:
        "Get help via email, chat, and phone/video from a team of DevOps experts. ",
      link: "#"
    }
  ],
  button: [
    {
      buttonLink: "#",
      buttonText: "Continue",
      blue: true
    },
    {
      buttonLink: "#",
      buttonText: "Contact Sales",
      transparent: true
    }
  ]
}
class SubscribeModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: true
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Subscribe Modal</title>
        </Helmet>
        <Modal
          isOpen={this.state.modal}
          centered={true}
          toggle={this.toggle}
          className="modal--service"
        >
          <ModalHeader toggle={this.toggle}>
            <img
              src={require("../assets/images/Bitmap (64).png")}
              className="modal__image"
              alt="mascot"
            />
          </ModalHeader>
          <ModalBody>
            <Subscribe content={modalContent} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default SubscribeModal
