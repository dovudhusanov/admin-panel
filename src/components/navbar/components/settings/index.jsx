import React, {useState} from 'react';
import {SettingsIcon} from "../../../../icons";
import {Icon} from "./settings.styles";
import SettingModal from "./settings-modal";

function Settings({setIsMobileSidebar}) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    function SettingBtnClick() {
        setIsMobileSidebar(false)
        setIsModalOpen(true)
    }

    return (
        <>
            <Icon onClick={SettingBtnClick}>
                <SettingsIcon/>
            </Icon>
            <SettingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
}

export default Settings;