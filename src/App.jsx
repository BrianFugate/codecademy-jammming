import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import spotifyLogo from './images/Spotify_Logo_RGB_Black.png';
import Spotify from './Spotify/Spotify';

function App() {
  // Declaring state hooks that are used by multiple children
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchCategory, setSearchCategory] = useState('track');

  // Populate search results or clear them if nothing is entered
  async function getSearchResults() {
    if (searchText === '') {
      setSearchResults([]);
    } else {
      const results = await Spotify.fetchSearchResults(searchText, searchCategory);
      setSearchResults(results);
    };
  };  

  if (window.location.hash === '') {
    Spotify.validateSpotify();
  };

  return (
    <>
      <div className={styles.heading}>
        <h1 className={styles.h1}>Ja<span>mmm</span>ing: Playlist Creator for </h1>
        <img src={spotifyLogo} className={styles.logo} alt='Spotify logo'/>
      </div>
      <div className={styles.body}>
        <SearchBar getSearchResults={getSearchResults} 
                    searchText={searchText} setSearchText={setSearchText} 
                    searchCategory={searchCategory} setSearchCategory={setSearchCategory}/>
        <SearchResults searchResults={searchResults} playlist={playlist} setPlaylist={setPlaylist}/>
        <Playlist playlist={playlist} setPlaylist={setPlaylist} setSearchResults={setSearchResults}
                  setSearchCategory={setSearchCategory} setSearchText={setSearchText}/>
      </div>
    </>
  );
};

export default App;
