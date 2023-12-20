import React, {useState} from 'react';

function SearchBar(props) {
    const [searchText, setSearchText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.getSearchResults(searchText);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='search' type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    );    
};

export default SearchBar;