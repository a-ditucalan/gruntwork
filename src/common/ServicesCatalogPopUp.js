import React from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap"

import Istio from "../assets/images/istio-modal.png"

const ServicesCatalogPopUp = ({ toggle, modal, handleClose }) => {
  return (
    <div>
      <Modal
        isOpen={modal}
        centered={true}
        toggle={toggle}
        className="modal-service"
      >
        <ModalHeader
          className="modal-service__close"
          toggle={toggle}
        ></ModalHeader>
        <ModalBody>
          <div className="modal-service__wrapper">
            <div className="modal-service__holder-title">
              <img src={Istio} alt="istio" />
              <div className="modal-service__desc">
                Deploy Istio, an open source service mesh that provides traffic
                management, policy enforcement, and telemetry collection.{" "}
              </div>
            </div>
            <div className="modal-service__content">
              <p className="modal-service--text">
                We haven’t created a service for Istio yet. Contact us if you’re
                interested in building this module together with the Gruntwork
                team.
              </p>
              <button className="button btn-contact btn-blue-hover">
                Contact Us
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ServicesCatalogPopUp
