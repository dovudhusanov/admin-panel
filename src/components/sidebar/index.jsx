import React from 'react';
import {SidebarItems, StyleSidebar, Logo, DashboardList, CloneBtn} from "./sidebar.styles";
import {NavLink} from "react-router-dom";
import {Typography} from "../typography";
import {CloseIcon, LogoIcon} from "../../icons";
import {cardData, categoryData} from "../../data";

function Sidebar({isMobileSidebar, setIsMobileSidebar}) {

    const navClose = () => {
        if (isMobileSidebar) setIsMobileSidebar(false)
    };

    return (
        <StyleSidebar isMobileSidebar={isMobileSidebar}>
            <CloneBtn onClick={() => setIsMobileSidebar(false)}>
                <CloseIcon />
            </CloneBtn>
            <SidebarItems isMobileSidebar={isMobileSidebar}>
                <Logo onClick={navClose}>
                    <NavLink to="/"><LogoIcon/></NavLink>
                </Logo>
                <DashboardList>
                    {categoryData?.map(categoryPath => (
                        <NavLink key={categoryPath.id} to={`/categories/${categoryPath.pathName}`} onClick={navClose}><Typography
                            size={"medium"} tag={"span"}
                            color={"darkGrey"}>{categoryPath.categoryName}</Typography></NavLink>
                    ))}
                </DashboardList>
            </SidebarItems>
        </StyleSidebar>
    );
}

export default Sidebar;