import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import SaveToSpotifyButton from '../SaveToSpotifyButton/SaveToSpotifyButton';
import styles from './Playlist.module.css';

function Playlist(props) {
    function buttonClick(e) {
        props.setPlaylist((prev) => prev.filter(element => element !== e));     
    };

    function saveToSpotify() {
        alert(JSON.stringify(props.playlist));
    }; 

    return (
        <>
            <div className={styles.playlist}>
                <h2>Playlist</h2>
                <Tracklist tracklist={props.playlist} buttonValue='Remove' buttonAction={buttonClick}/>
                <SaveToSpotifyButton buttonAction={saveToSpotify} />
            </div>
        </>
    );
};

export default Playlist;