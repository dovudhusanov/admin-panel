import React from 'react';
import {useParams} from "react-router-dom";
import {cardData} from "../../data";
import Cards from "../../components/cards";

function Categories() {

    const {categoryName} = useParams()

    const filteredProduct = cardData.filter((categoryPath) => categoryPath.pathName === categoryName)

    return (
        <>
            <Cards
                cards={filteredProduct}
            />
        </>
    );
}

export default Categories;