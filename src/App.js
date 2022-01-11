import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import axios from 'axios';
import FilterMusic from './Components/FilterMusic/FilterMusic';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import GetAllSongs from './Components/GetAllSongs/GetAllSongs';
import SearchBarMultiple from './Components/SearchBarMultiple/SearchBarMultiple';

function App() {

  const [allSongs, setAllSongs] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    setBackground();
  }, [])

  function setBackground(){
    document.body.style.backgroundColor = '#fafafa';
    document.body.style.marginLeft = '2em';
    document.body.style.marginRight = '2em'
  }

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
      <div className='container-fluid'>
        <div className='row' style={{'marginBottom':'2em'}}>
          <NavBar allSongs={allSongs} songs={songs} getSpecificSong={getSpecificSong} getAllSongs={getAllSongs} setAllSongs={setAllSongsFunction}/>
          <h1 className='text-align-center' style={{'marginTop':'2em'}}>Welcome to Music<small className='text-muted'>Library</small>!</h1>
          <p className="text-align-center" style={{'marginTop':'1em'}}>
          Welcome to your own MusicLibrary. You can filter songs by selecting the <i className="bi bi-filter-square"></i> icon on the left-hand side.
          <br></br>
          You can also search for a specific songs by selecting the <i className="bi bi-search"></i> icon on the left-hand side.
          <br></br>
          When you have completed any filtering or searching, use the 'Display All Songs' button to show all the songs again.
          <br></br>
          You can also Search (<i className="bi bi-search"></i>), Display  All (<i className="bi bi-eye"></i>), or Scroll To Top (<i className="bi bi-arrow-bar-up"></i>) from the navigation bar.
          </p>
        </div>

        <div className='row sticky-top'>
          <div className='col-2'>
            {/* for spacing */}
          </div>
          <div className='col-8'>
            <GetAllSongs navbar='false' allSongs={allSongs} setAllSongs={setAllSongsFunction}/>
          </div>
          <div className='col-2'>
            {/* for spacing */}
          </div>
        </div>

        <div className='row'>
          <div className='col-2' style={{'marginTop':'1em'}}>
            <SearchBarMultiple allSongs={allSongs} songs={songs} getSpecificSong={getSpecificSong}/>
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