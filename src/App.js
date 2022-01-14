import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import axios from 'axios';
import FilterMusic from './Components/FilterMusic/FilterMusic';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import GetAllSongs from './Components/GetAllSongs/GetAllSongs';
import AddSong from './Components/AddSong/AddSong';

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
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setAllSongs(response.data);
    setSongs(response.data);
    //debugger
  }

  async function addSong(song){
      debugger
      await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/music/',
      headers: {}, 
      data: song
    });

    getAllSongs()
  }

  async function updateSong(song){
    debugger
    console.log(`http://127.0.0.1:8000/music/${song.id}/`)
    await axios({
    method: 'put',
    url: `http://127.0.0.1:8000/music/${song.id}/`,
    headers: {}, 
    data: song,
  });

  getAllSongs()
}

  async function deleteSong(song){
    debugger
    console.log(`http://127.0.0.1:8000/music/${song.id}/`)
    await axios({
    method: 'delete',
    url: `http://127.0.0.1:8000/music/${song.id}/`,
  });

  getAllSongs()
  }

  function setAllSongsFunction(allSongs){
    setSongs(allSongs);
  }

  function updateSetSongs(song){
    setSongs(song);
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row' style={{'marginBottom':'2em'}}>
          <NavBar allSongs={allSongs} songs={songs} updateSetSongs={updateSetSongs} getAllSongs={getAllSongs} setAllSongs={setAllSongsFunction}  addSong={addSong}/>
          <h1 className='text-align-center' style={{'marginTop':'2em'}}>Welcome to Music<small className='text-muted'>Library</small>!</h1>
          <p className="text-align-center" style={{'marginTop':'1em'}}>
          Welcome to your own MusicLibrary. You can easily search for a specific song from the Navigation Bar at the top of the page.
          <br></br>
          You can filter songs by selecting the <i className="bi bi-filter-square"></i> icon on the left-hand side.
          <br></br>
          You can also add a new song by selecting the <i className="bi bi-plus-lg"></i> icon on the left-hand side.
          <br></br>
          When you have completed any filtering or searching, use the 'Display All Songs' button to show all the songs again.
          <br></br>
          You can also Like A Song (<i className="bi bi-hand-thumbs-up"></i>), Edit A Song (<i className="bi bi-pen"></i>), and Delete A Song (<i className="bi bi-trash"></i>) within the table.
          <br></br>
          You can also Add A Song (<i className="bi bi-plus-lg"></i>), Filter (<i className="bi bi-filter-square"></i>), Display  All (<i className="bi bi-eye"></i>) or Scroll To Top (<i className="bi bi-arrow-bar-up"></i>) from the navigation bar.
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
              <div>
                <AddSong addSong={addSong}/>
              </div>
              <div>
                <FilterMusic navbar='false' allSongs={allSongs} songs={songs} updateSetSongs={updateSetSongs} setAllSongs={setAllSongsFunction}/>
              </div>
            
          </div>
          <div className='col-8'>
            <DisplayMusicTable songs={songs} updateSong={updateSong} deleteSong={deleteSong} updateSetSongs={updateSetSongs}/>
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