import React from 'react';
import styles from './Track.module.css';
import { FaDotCircle } from "react-icons/fa";
import { PiDotFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { RxDot } from "react-icons/rx";



function Track(props) {
    return (
        <div className={styles.track}>
            <p className={styles.song}>{props.track.name}</p>
            <p className={styles.album}>{props.track.artists[0].name}<PiDotFill className={styles.icon} />{props.track.album.name}</p>
        </div>
    );
};

export default Track;