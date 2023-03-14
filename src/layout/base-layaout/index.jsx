import React, {useEffect, useState} from 'react';
import Sidebar from "../../components/sidebar";
import {BaseLayoutStyles, BaseLayoutApp, BaseLayoutItems} from "./base-layout.styles";
import Navbar from "../../components/navbar";

function BaseLayout({children}) {

    const [isMobileSidebar, setIsMobileSidebar] = useState(false)

    return (
        <BaseLayoutStyles>
            <Sidebar isMobileSidebar={isMobileSidebar} setIsMobileSidebar={setIsMobileSidebar}/>
            <BaseLayoutApp>
                <Navbar isMobileSidebar={isMobileSidebar} setIsMobileSidebar={setIsMobileSidebar}/>
                <div>
                    <BaseLayoutItems>{children}</BaseLayoutItems>
                </div>
            </BaseLayoutApp>
        </BaseLayoutStyles>
    );
}

export default BaseLayout;