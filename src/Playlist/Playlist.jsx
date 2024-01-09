import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist(props) {
    function buttonClick(e) {
        props.setPlaylist((prev) => prev.filter(element => element !== e));     
    };

    return (
        <>
            <form className={styles.playlist} onSubmit={props.saveToSpotify}>
                <input className={styles.playlistName} type='text' value={props.playlistName} onChange={(e) => props.setPlaylistName(e.target.value)}/>
                <Tracklist tracklist={props.playlist} buttonValue='Remove' buttonAction={buttonClick}/>
                {props.playlist.length !== 0 ? <button className={styles.button} type='submit'>Save To Spotify</button> : null}
            </form>           
        </>
    );
};

export default Playlist;