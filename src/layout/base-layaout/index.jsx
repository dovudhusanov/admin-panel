import React from 'react';
import Sidebar from "../../components/sidebar";
import {BaseLayoutStyles, BaseLayoutApp, BaseLayoutItems} from "./base-layout.styles";
import Navbar from "../../components/navbar";

function BaseLayout({children}) {
    return (
        <BaseLayoutStyles>
            <Sidebar/>
            <BaseLayoutApp>
                <Navbar/>
                <div>
                    <BaseLayoutItems>{children}</BaseLayoutItems>
                </div>
            </BaseLayoutApp>
        </BaseLayoutStyles>
    );
}

export default BaseLayout;