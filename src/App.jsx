import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import spotifyLogo from './images/Spotify_Logo_RGB_Black.png';
import fetchSearchResults from './SpotifyAPICalls/fetchSearchResults';

function App() {
  // Declaring state hooks that are used by multiple children
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  // Populate search results or clear them if nothing is entered
  async function getSearchResults(searchText, category) {
    if (searchText === '') {
      setSearchResults([]);
    } else {
      const results = await fetchSearchResults(searchText, category);
      setSearchResults(results);
    };
  };

  return (
    <>
      <div className={styles.heading}>
        <h1 className={styles.h1}>Ja<span>mmm</span>ing: Playlist Creator for </h1>
        <img src={spotifyLogo} className={styles.logo} alt='Spotify logo'/>
      </div>
      <div className={styles.body}>
        <SearchBar getSearchResults={getSearchResults}/>
        <SearchResults searchResults={searchResults} playlist={playlist} setPlaylist={setPlaylist}/>
        <Playlist playlist={playlist} setPlaylist={setPlaylist}/>
      </div>
    </>
  );
};

export default App;
