import React, {useState} from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

function SearchResults(props) {
    function buttonClick(e) {
        if (!props.playlist.includes(e)) {
            props.setPlaylist((prev) => [...prev, e]);
        };        
    };
    
    return (
        <>
            <div className={styles.searchResults}>
                <h2>Results</h2>
                <Tracklist tracklist={props.searchResults} buttonValue='Add' buttonAction={buttonClick}/>
            </div>
        </>
    );
};

export default SearchResults;