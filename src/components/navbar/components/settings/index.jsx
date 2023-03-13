import React, {useState} from 'react';
import {SettingsIcon} from "../../../../icons";
import {Icon} from "./settings.styles";
import SettingModal from "./settings-modal";

function Settings() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Icon onClick={() => setIsModalOpen(true)}>
                <SettingsIcon/>
            </Icon>
            <SettingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    );
}

export default Settings;