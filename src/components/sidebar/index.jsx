import React from 'react';
import {SidebarItems, StyleSidebar, Logo, DashboardList} from "./sidebar.styles";
import {NavLink} from "react-router-dom";
import {Typography} from "../typography";
import {LogoIcon} from "../../icons";
import {cardData, categoryData} from "../../data";

function Sidebar() {

    return (
        <StyleSidebar>
            <SidebarItems>
                <Logo>
                    <NavLink to="/"><LogoIcon/></NavLink>
                </Logo>
                <DashboardList>
                    {categoryData?.map(categoryPath => (
                        <NavLink key={categoryPath.id} to={`/categories/${categoryPath.pathName}`}><Typography size={"medium"} tag={"span"}
                                                    color={"darkGrey"}>{categoryPath.categoryName}</Typography></NavLink>
                    ))}
                </DashboardList>
            </SidebarItems>
        </StyleSidebar>
    );
}

export default Sidebar;