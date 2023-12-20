import React from 'react';
import Track from '../Track/Track';

function TrackList(props) {
    return (
        <>
            {props.trackList.map((e) => (<div key={e.id}>
                                            <Track track={e}/>
                                            <button>Add</button>
                                        </div>))}
        </>
    );
};

export default TrackList;