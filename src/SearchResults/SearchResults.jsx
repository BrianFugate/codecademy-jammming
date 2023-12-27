import React, {useState} from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    function buttonClick(e) {
        if (!props.playlist.includes(e)) {
            props.setPlaylist((prev) => [...prev, e]);
        };        
    };
    
    return (
        <>
            <div>Results
                <Tracklist tracklist={props.searchResults} buttonValue='Add' buttonAction={buttonClick}/>
            </div>
        </>
    );
};

export default SearchResults;