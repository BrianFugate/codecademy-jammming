import React, {useState} from 'react';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
    
    return (
        <>
            <div>Results
                <TrackList trackList={props.searchResults}/>
            </div>
        </>
    );
};

export default SearchResults;