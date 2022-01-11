import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import FilterMusic from './Components/FilterMusic/FilterMusic';
import './App.css';

function App() {

  const [allSongs, setAllSongs] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setAllSongs(response.data);
    setSongs(response.data);
    //debugger
  }

  function setAllSongsFunction(allSongs){
    setSongs(allSongs);
    //debugger
  }

  function getSpecificSong(song){
    setSongs(song);
  }

  function getFilteredSongs(song){
    setSongs(song);
  }

  return (
    <div>
      <div className='container-fluid' style={{'marginLeft': '2em'}}>
        <div className='row' style={{'marginBottom':'2em'}}>
          <h1 className='text-align-center' style={{'marginTop':'1em'}}>Welcome to Music Library!</h1>
        </div>

        <div className='row'>
          <div className='col-2'>
            {/* for spacing */}
          </div>
          <div className='col-8'>
            
            <button className='btn btn-primary text-align-center' onClick={getAllSongs} style={{'width':'100%'}}>Display All Songs</button>
          </div>
          <div className='col-2'>
            {/* for spacing */}
          </div>
        </div>

        <div className='row'>
          <div className='col-2' style={{'marginTop':'-2.2em'}}>
            <SearchBar allSongs={allSongs} songs={songs} getSpecificSong={getSpecificSong}/>
            <span><br></br></span>
            <FilterMusic allSongs={allSongs} songs={songs} getFilteredSongs={getFilteredSongs} setAllSongs={setAllSongsFunction}/>

          </div>
          <div className='col-8'>
            <DisplayMusicTable songs={songs}/>
          </div>

          <div className='col-2'>
            {/* empty column for spacing */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;