import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function getSearchResults(txt) {
    setSearchResults([{id: 0, artist: 'Metallica', album: '...And Justice For All', song: 'One'}, 
                      {id: 1, artist: 'Pearl Jam', album: 'Ten', song: 'Jeremy'},
                      {id: 2, artist: 'Red Hot Chili Peppers', album: 'Blood Sugar Sex Magik', song: 'Suck My Kiss'}]);
  };

  return (
    <>
      <h1 className={styles.h1}>Ja<span>mmm</span>ing: Spotify Playlist Creator</h1>
      <div className={styles.body}>
        <SearchBar getSearchResults={getSearchResults}/>
        <SearchResults searchResults={searchResults} playlist={playlist} setPlaylist={setPlaylist}/>
        <Playlist playlist={playlist} setPlaylist={setPlaylist}/>
      </div>
    </>
  );
};

export default App;
