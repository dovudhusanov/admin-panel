import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalCssStyles} from "./GlobalCss.styles";
import {BrowserRouter} from "react-router-dom";
import BaseLayout from "./layout/base-layaout";
import ScrollTopTop from "./middleware/scroll-top-top";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <BaseLayout>
                <ScrollTopTop/>
                <App/>
                <GlobalCssStyles/>
            </BaseLayout>
        </BrowserRouter>
    </React.StrictMode>
)