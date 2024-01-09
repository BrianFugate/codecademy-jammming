import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import spotifyLogo from './images/Spotify_Logo_RGB_Black.png';
import fetchSearchResults from './SpotifyAPICalls/fetchSearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('Jammming Playlist');

  async function getSearchResults(searchText, category) {
    if (searchText === '') {
      setSearchResults([]);
    } else {
      const results = await fetchSearchResults(searchText, category);
      setSearchResults(results);
    };
  };

  function saveToSpotify(e) {
    e.preventDefault();
    alert(playlistName + JSON.stringify(playlist));
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
        <Playlist playlist={playlist} setPlaylist={setPlaylist} playlistName={playlistName} setPlaylistName={setPlaylistName} saveToSpotify={saveToSpotify}/>
      </div>
    </>
  );
};

export default App;
