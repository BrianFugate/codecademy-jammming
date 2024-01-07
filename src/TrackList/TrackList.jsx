import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <>
            {props.tracklist.map((element) => (<div key={element.id}>
                                                <Track track={element}/>
                                                <button onClick={() => props.buttonAction(element)}>{props.buttonValue}</button>
                                            </div>))}
        </>
    );
};

export default Tracklist;