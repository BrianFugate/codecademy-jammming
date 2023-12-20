import React from 'react';

function Track(props) {
    return (
        <>
            <p>{props.track.artist}</p>
            <p>{props.track.song}</p>
        </>
    );
};

export default Track;