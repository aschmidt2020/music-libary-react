import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import FilterMusic from './Components/FilterMusic/FilterMusic';
import './App.css';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }

  function getSpecificSong(song){
    setSongs(song);
  }

  function getFilteredSongs(song){
    setSongs(song);
  }

  return (
    <div>
      <SearchBar songs={songs} getSpecificSong={getSpecificSong}/>
      <FilterMusic songs={songs} getFilteredSongs={getFilteredSongs}/>
      <DisplayMusicTable songs={songs}/>
      <button onClick={getAllSongs}>Display All Songs</button>
    </div>
  );
}

export default App;