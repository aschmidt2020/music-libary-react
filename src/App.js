import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }

  async function getSpecificSong(song){
    setSongs(song);
  }

  return (
    <div>
      <SearchBar songs={songs} getSpecificSong={getSpecificSong}/>
      <DisplayMusicTable songs={songs}/>
      <button onClick={getAllSongs}>Display All Songs</button>
    </div>
  );
}

export default App;