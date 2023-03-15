import React, {useEffect, useState} from 'react';
import {ModalBg, Modal, Close} from "./settings-modal.styles";
import {CloseIcon} from "../../../../../icons";

function SettingModal({isModalOpen, setIsModalOpen}) {

    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
    const [color, setColor] = useState(localStorage.getItem("mainColor") || "#5D60EF");

    useEffect(() => {
        localStorage.setItem("mainColor", color)
    }, [color, localStorage.getItem("mainColor")])

    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark');
            document.getElementById("root").classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.getElementById("root").classList.remove('dark');
        }
    }, [mode]);

    function toggleMode() {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    }

    return (
        <ModalBg isModalOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
            <Modal isModalOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
                <Close onClick={() => setIsModalOpen(false)}>
                    <CloseIcon/>
                </Close>
                <button onClick={toggleMode}>change mode</button>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </Modal>
        </ModalBg>
    );
}

export default SettingModal;