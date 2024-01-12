import React from 'react';
import Track from '../Track/Track.jsx';
import styles from './Tracklist.module.css';
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

function Tracklist(props) {
    return (
        <>
            {props.tracklist.map((element) => (<div className={styles.lineContainer} key={element.id}>
                                                    <div className={styles.trackContainer}>
                                                        <img src={element.album.images[2].url}/>
                                                        <Track track={element}/>
                                                    </div>
                                                    <button className={styles.button} onClick={() => props.buttonAction(element)}>{props.buttonValue === 'Add' ? <FaRegSquarePlus /> : <FaRegSquareMinus />}</button>
                                                </div>))}
        </>
    );
};

export default Tracklist;