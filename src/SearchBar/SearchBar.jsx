import React, {useState} from 'react';
import styles from './SearchBar.module.css'

function SearchBar(props) {
    const [searchText, setSearchText] = useState('');
    const [searchCategory, setSearchCategory] = useState('Track');

    function handleSubmit(e) {
        e.preventDefault();
        props.getSearchResults(searchText);
    };

    function handleCategoryChange(category) {
        setSearchCategory(category);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.searchBar}>
                <input className={styles.searchBox} name='search' type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <select className={styles.dropdown} value={searchCategory} onChange={event => handleCategoryChange(event.target.value)}>
                    <option id="0" >Track</option>
                    <option id="1" >Artist</option>
                    <option id="2" >Album</option>
                    <option id="3" >Genre</option>
                </select>   
            </div>
            <button className={styles.button} type='submit'>Search</button>
        </form>
    );    
};

export default SearchBar;