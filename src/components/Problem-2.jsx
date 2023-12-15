import React, { useState } from "react";
import ModalA from "./problem-2-components/ModalA";
import ModalB from "./problem-2-components/ModalB";
import CustomModal from "./problem-2-components/CustomModal";

const Problem2 = () => {
  const [modalAVisible, setModalAVisible] = useState(false);
  const [modalBVisible, setModalBVisible] = useState(false);

  const openModalA = () => {
    setModalAVisible(true);
    setModalBVisible(false);
  };

  const openModalB = () => {
    setModalBVisible(true);
    setModalAVisible(false);
  };

  const closeModal = () => {
    setModalAVisible(false);
    setModalBVisible(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openModalB}
          >
            US Contacts
          </button>
        </div>

        {modalAVisible && (
          <CustomModal
            showModal={modalAVisible}
            hideModal={setModalAVisible}
            title={"Modal A"}
          >
            <ModalA onClose={closeModal} onSwitchToUSContacts={openModalB} />
          </CustomModal>
        )}

        {modalBVisible && (
          <CustomModal
            showModal={modalBVisible}
            hideModal={setModalBVisible}
            title={"Modal B"}
          >
            <ModalB onClose={closeModal} onSwitchToAllContacts={openModalA} />
          </CustomModal>
        )}
      </div>
    </div>
  );
};

export default Problem2;
