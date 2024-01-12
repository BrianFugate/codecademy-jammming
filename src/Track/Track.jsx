import React from 'react';
import styles from './Track.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Track(props) {
    return (
        <div className={styles.track}>
            <p className={styles.song}>{props.track.name}</p>
            <p className={styles.album}>{props.track.artists[0].name} <FontAwesomeIcon className={styles.icon} icon={faCircle} /> {props.track.album.name}</p>
        </div>
    );
};

export default Track;