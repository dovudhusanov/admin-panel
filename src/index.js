import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalCssStyles} from "./GlobalCss.styles";
import {BrowserRouter} from "react-router-dom";
import BaseLayout from "./layout/base-layaout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
          <BaseLayout>
              <App/>
              <GlobalCssStyles/>
          </BaseLayout>
        </BrowserRouter>
    </React.StrictMode>
);
