import React from 'react';
import {Typography} from "../typography";
import {NavbarStyle} from "./navbar.styles";
import Settings from "./components/settings";

function Navbar() {
    return (
        <NavbarStyle>
            <Typography size={"h3"} tag={"h3"} color={"black"}>Dashboard</Typography>
            <Settings />
        </NavbarStyle>
    );
}

export default Navbar;