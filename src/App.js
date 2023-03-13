import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import NotFoundPage from "./pages/not-found-page";
import Categories from "./pages/categories";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories/:categoryName" element={<Categories />} />
            <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
