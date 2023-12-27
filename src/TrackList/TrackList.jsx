import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <>
            {props.tracklist.map((e) => (<div key={e.id}>
                                            <Track track={e}/>
                                            <button onClick={() => props.buttonAction(e)}>{props.buttonValue}</button>
                                        </div>))}
        </>
    );
};

export default Tracklist;