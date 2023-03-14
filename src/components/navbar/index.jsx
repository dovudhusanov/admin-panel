import React from 'react';
import {Typography} from "../typography";
import {NavbarStyle, Menu} from "./navbar.styles";
import Settings from "./components/settings";
import {MenuIcon} from "../../icons";

function Navbar({isMobileSidebar, setIsMobileSidebar}) {
    return (
        <NavbarStyle>
            <Menu isMobileSidebar={isMobileSidebar} onClick={() => setIsMobileSidebar(true)}>
                <MenuIcon/>
            </Menu>
            <Typography size={"h3"} tag={"h3"} color={"black"}>Dashboard</Typography>
            <Settings setIsMobileSidebar={setIsMobileSidebar}/>
        </NavbarStyle>
    );
}

export default Navbar;