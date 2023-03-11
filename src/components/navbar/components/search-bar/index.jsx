import React, {useState} from 'react';
import {SearchForm} from "./search-bar.styles";

function SearchBar() {

    const [searchValue, setSearchValue] = useState("")

    return (
        <SearchForm>
            <input
                type="text"
                placeholder="Search here..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </SearchForm>
    );
}

export default SearchBar;