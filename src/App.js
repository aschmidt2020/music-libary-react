import React, { useState, useEffect } from 'react';
import DisplayMusicTable from './Components/DisplayMusicTable/DisplayMusicTable';
import axios from 'axios';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import GetAllSongs from './Components/GetAllSongs/GetAllSongs';
import WelcomeText from './Components/WelcomeText/WelcomeText';
import { compareIdOldestFirst, compareTitles, compareIdRecentFirst } from './Utils/CompareToSort'

function App() {

  const [tempSongs, setTempSongs] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [sortByState, setSortByState] = useState('oldest');

  useEffect(() => {
    getAllSongs();
    setBackground();
  }, [])

  useEffect(() => {
    getSongsOrderOnRerender(sortByState);
    debugger
    //updateSongsOnRerender();
    //console.log(songs)
    // eslint-disable-next-line
  }, [tempSongs])


  function setBackground(){
    document.body.style.backgroundColor = '#fafafa';
    document.body.style.marginLeft = '-2em';
  }

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setAllSongs(response.data);
    setSongs(response.data);
    setTempSongs(response.data);
  }

  async function getAllSongsSorted(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setTempSongs(response.data);
  }

  async function addSong(song){
      await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/music/',
      headers: {}, 
      data: song
    });

    getAllSongsSorted();
    
  }

  async function updateSong(song){
    //console.log(`http://127.0.0.1:8000/music/${song.id}/`)
    debugger
    await axios({
    method: 'put',
    url: `http://127.0.0.1:8000/music/${song.id}/`,
    headers: {}, 
    data: song,
  });

  getAllSongsSorted();
}

  async function deleteSong(song){
    //console.log(`http://127.0.0.1:8000/music/${song.id}/`)
    await axios({
    method: 'delete',
    url: `http://127.0.0.1:8000/music/${song.id}/`,
  });

  getAllSongsSorted();
  }

  function setAllSongsFunction(allSongs){
    setSongs(allSongs);
  }

  function updateSetSongs(song){
    setSongs(song);
  }

  function getSongsOrder(sortBy){
    debugger
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

function getSongsOrderOnRerender(sortBy){
  if(sortBy === 'title'){
      let songsCopy = [...tempSongs]
      let songsOrder = songsCopy.sort(compareTitles);
      tempSongs.sort(compareTitles);

      setSongs(songsOrder);
      setAllSongs(songsOrder);
      //debugger
    
    }  

  else if(sortBy === 'recent'){
      let songsCopy = [...tempSongs]
      let songsOrder = songsCopy.sort(compareIdRecentFirst);

      setSongs(songsOrder);
      setAllSongs(songsOrder);
  }

  else if(sortBy === 'oldest'){
    let songsCopy = [...tempSongs]
    let songsOrder = songsCopy.sort(compareIdOldestFirst);

     setSongs(songsOrder);
     setAllSongs(songsOrder);
}

}

// function updateSongsOnRerender(){
//   let songIds = songs.map((song) => {
//     return song.id
//   })

//   let temp = tempSongs.filter((e => {
//     if(songIds.includes(e.id)){return true};
//   }))

//   debugger
//   setSongs(temp)

// }

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
            <DisplayMusicTable songs={songs} updateSong={updateSong} deleteSong={deleteSong} updateSetSongs={updateSetSongs} getSongsOrder={getSongsOrder}/>
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