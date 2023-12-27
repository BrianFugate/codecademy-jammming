import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function getSearchResults(txt) {
    setSearchResults([{id: 0, artist: 'Metallica', song: 'One'}, {id: 1, artist: 'Pearl Jam', song: 'Jeremy'}]);
  };

  return (
    <>
      
      <h1>Jammming</h1>
      <SearchBar getSearchResults={getSearchResults}/>
      <SearchResults searchResults={searchResults} setPlaylist={setPlaylist} playlist={playlist}/>
      <p>Playlist</p>
      <p>{JSON.stringify(playlist)}</p>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more, dummy
      </p>
    </>
  );
};

export default App;
