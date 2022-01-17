import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import axios from 'axios';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import GetAllSongs from './Components/GetAllSongs/GetAllSongs';
import WelcomeText from './Components/WelcomeText/WelcomeText';

function App() {

  const [allSongs, setAllSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [sortByState, setSortByState] = useState('oldest');

  useEffect(() => {
    getAllSongs();
    setBackground();
  }, [])

  function setBackground(){
    document.body.style.backgroundColor = '#fafafa';
    document.body.style.marginLeft = '-2em';
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

    getAllSongs();
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

  function setSongsOrder(sortBy){
    
    if(sortBy === 'title'){
        let songsCopy = [...songs]
        let songsOrder = songsCopy.sort(compareTitles);
  
        let allSongsCopy = [...allSongs]
        let allSongsOrder = allSongsCopy.sort(compareTitles);
  
        setSongs(songsOrder);
        setAllSongs(allSongsOrder);
        setSortByState('title');
      
      }  

    else if(sortBy === 'recent'){
        let songsCopy = [...songs]
        let songsOrder = songsCopy.sort(compareIdRecentFirst);
  
        let allSongsCopy = [...allSongs]
        let allSongsOrder = allSongsCopy.sort(compareIdRecentFirst);
  
        setSongs(songsOrder);
        setAllSongs(allSongsOrder);
        setSortByState('recent');
    }

    else if(sortBy === 'oldest'){
      let songsCopy = [...songs]
      let songsOrder = songsCopy.sort(compareIdOldestFirst);

      let allSongsCopy = [...allSongs]
      let allSongsOrder = allSongsCopy.sort(compareIdOldestFirst);

      setSongs(songsOrder);
      setAllSongs(allSongsOrder);
      setSortByState('oldest');
  }
  }

  function compareTitles(x,y) 
  {
  if (x.title.toLowerCase() < y.title.toLowerCase())
      return -1;
  if (x.title.toLowerCase() > y.title.toLowerCase())
      return 1;
  return 0;
  }

 function compareIdRecentFirst(x,y) 
  {
  if (x.id < y.id)
      return 1;
  if (x.id > y.id)
      return -1;
  return 0;
  }

  function compareIdOldestFirst(x,y) 
  {
  if (x.id < y.id)
      return -1;
  if (x.id > y.id)
      return 1;
  return 0;
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row' style={{'marginBottom':'2em'}}>
          <NavBar allSongs={allSongs} songs={songs} updateSetSongs={updateSetSongs} getAllSongs={getAllSongs} setAllSongs={setAllSongsFunction}  addSong={addSong}/>
          <WelcomeText />
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
          <div className='col-1' style={{'marginTop':'1em'}}>
            {/* empty column for spacing */}
            
          </div>
          <div className='col-10'>
            <DisplayMusicTable allSongs={allSongs} songs={songs} updateSong={updateSong} deleteSong={deleteSong} updateSetSongs={updateSetSongs} setSongsOrder={setSongsOrder}/>
          </div>

          <div className='col-1'>
            {/* empty column for spacing */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;