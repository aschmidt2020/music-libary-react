import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const SearchBar = (props) => {
    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event){
        event.preventDefault();
        let releaseDateFormat = releaseDate[5] + releaseDate[6] + '/' + releaseDate[8] + releaseDate[9] + '/' + releaseDate [0] + releaseDate [1] + releaseDate [2] + releaseDate [3]
        
        debugger
        
        let song = props.songs.filter (e => {
                     if(e.title == title){return true};
                     if(e.album == album){return true};
                     if(e.artist == artist){return true};
                     if(e.genre == genre){return true};
                     if(e.releaseDate == releaseDateFormat){return true};
                 });
        props.getSpecificSong(song);
        resetForm();
    }

    function resetForm(){
        setTitle('');
        setAlbum('');
        setArtist('');
        setGenre('');
        setReleaseDate('');
    }

    return ( 

        <form className='search-form' onSubmit={handleSubmit}>
            <h2>Search</h2>
            <div className='input-group mb-3'>
                <label className='input-group-text'>Title</label>
                <input className='form-control' type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>     
            </div>

            <div className='input-group mb-3'>
                <label className='input-group-text'>Artist</label>
                <input className='form-control' type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>    
            </div>

            <div className='input-group mb-3'>
                <label className='input-group-text'>Album</label>
                <input className='form-control' type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>

            <div className='input-group mb-3'>
                <label className='input-group-text'>Genre</label>
                <input className='form-control' type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>     
            </div>      

            <div className='input-group mb-3'>
                <label className='input-group-text'>Release Date</label>
                <input className='form-control' type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>  
            </div>
                <button type='submit' className='btn btn-secondary' style={{'marginLeft': '7em'}}>Search</button>

        </form>


    );
}
 
export default SearchBar;


