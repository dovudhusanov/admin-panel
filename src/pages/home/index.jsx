import React from 'react';
import SearchBar from "../../components/search-bar";
import Cards from "../../components/cards";
import {cardData} from "../../data";

function Home() {
    return (
        <>
            <SearchBar />
            <Cards
                cards={cardData}
            />
        </>
    );
}

export default Home;