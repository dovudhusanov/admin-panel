import React from 'react';
import {SidebarItems, StyleSidebar, Logo, DashboardList} from "./sidebar.styles";
import {NavLink} from "react-router-dom";
import {Typography} from "../typography";
import {LogoIcon} from "../../icons";

function Sidebar() {
    return (
        <StyleSidebar>
            <SidebarItems>
                <Logo>
                    <NavLink to="/"><LogoIcon/></NavLink>
                </Logo>
                <DashboardList>
                    <NavLink to="/"><Typography size={"medium"} tag={"span"}
                                                color={"darkGrey"}>Category</Typography></NavLink>
                    <NavLink to="/about"><Typography size={"medium"} tag={"span"}
                                                     color={"darkGrey"}>Category</Typography></NavLink>
                    <NavLink to="/contact"><Typography size={"medium"} tag={"span"}
                                                       color={"darkGrey"}>Category</Typography></NavLink>
                    <NavLink to="/category"><Typography size={"medium"} tag={"span"}
                                                        color={"darkGrey"}>Category</Typography></NavLink>
                    <NavLink to="/login"><Typography size={"medium"} tag={"span"}
                                                     color={"darkGrey"}>Category</Typography></NavLink>
                </DashboardList>
            </SidebarItems>
        </StyleSidebar>
    );
}

export default Sidebar;