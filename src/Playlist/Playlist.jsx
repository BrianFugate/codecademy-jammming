import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';
import Spotify from '../Spotify/Spotify';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('Jammming Playlist');

    function buttonClick(e) {
        props.setPlaylist((prev) => prev.filter(element => element !== e));     
    };

    // Save a playlist to a user's Spotify account
    function saveToSpotify(e) {
        e.preventDefault();
        const playlistSaved = Spotify.savePlaylist(playlistName, props.playlist);

        if (playlistSaved) {
            props.setPlaylist([]);
            setPlaylistName('Jammming Playlist');
            props.setSearchResults([]);
            props.setSearchText('');
            props.setSearchCategory('track');
        };
     }; 

    return (
        <>
            <form className={styles.playlist} onSubmit={saveToSpotify}>
                <input className={styles.playlistName} type='text' value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}/>
                <Tracklist tracklist={props.playlist} buttonValue='Remove' buttonAction={buttonClick}/>
                {props.playlist.length !== 0 ? <button className={styles.button} type='submit'>Save To Spotify</button> : null}
            </form>           
        </>
    );
};

export default Playlist;