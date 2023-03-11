import React from 'react';
import {Typography} from "../typography";
import {NavbarStyle} from "./navbar.styles";
import SearchBar from "./components/search-bar";
import Settings from "./components/settings";

function Navbar() {
    return (
        <NavbarStyle>
            <Typography size={"h3"} tag={"h3"} color={"black"}>Dashboard</Typography>
            <SearchBar />
            <Settings />
        </NavbarStyle>
    );
}

export default Navbar;