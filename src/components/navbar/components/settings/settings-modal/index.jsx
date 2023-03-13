import React from 'react';
import {ModalBg, Modal,Close} from "./settings-modal.styles";

function SettingModal({isModalOpen, setIsModalOpen}) {
    return (
        <ModalBg isModalOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
            <Modal isModalOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
              <Close onClick={() => setIsModalOpen(false)}>
                  <i className="fa-solid fa-xmark"></i>
              </Close>
            </Modal>
        </ModalBg>
    );
}

export default SettingModal;