import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddSong = (props) => {
    const [title, setTitle] = useState('');
    const [albumArt, setAlbumArt] = useState('')
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [likes, setLikes] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSubmit(event){
        event.preventDefault();

        if(title !== '' && artist !== ''){
          let newSong = {
            title: title,
            album_art_link: (valueOrNull(albumArt)),
            album: (valueOrNull(album)),
            artist: artist,
            genre: (valueOrNull(genre)),
            release_date: (valueOrNull(releaseDate)),
            likes: likes
          }
          props.addSong(newSong);
          resetForm();
        }
        else{
          alert('Please enter both a song title and artist.')
        }
    }

    function valueOrNull(state){
      if(state === ''){
        return null
      }
      else if(state === null){
        return null
      }
      else if(state !== ''){
        return state
      }
    }

    function resetForm(){
        setTitle('');
        setAlbum('');
        setAlbumArt('');
        setArtist('');
        setGenre('');
        setReleaseDate('');
        setLikes(0)
        handleClose();
    }

    return ( 
        <div style={{'marginLeft':'80%'}}>
          <Button variant="btn btn-outline-secondary" onClick={handleShow} style={{'marginTop':'1em'}} data-toggle='popover' title='Add Song' data-content='Add Song' trigger='hover'>
          <i className="bi bi-plus-lg"></i>
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <form className='search-form' onSubmit={handleSubmit}>
                <div className='input-group mb-3'>
                    <label className='input-group-text'>Title (req)</label>
                    <input className='form-control' type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>     
                </div>

                <div className='input-group mb-3'>
                    <label className='input-group-text'>Artist (req)</label>
                    <input className='form-control' type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>    
                </div>

                <div className='input-group mb-3'>
                    <label className='input-group-text'>Album</label>
                    <input className='form-control' type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                </div>

                <div className='input-group mb-3'>
                    <label className='input-group-text'>Album Art Link</label>
                    <input className='form-control' type='text' value={albumArt} onChange={(event) => setAlbumArt(event.target.value)}/>
                </div>

                <div className='input-group mb-3'>
                    <label className='input-group-text'>Genre</label>
                    <input className='form-control' type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>     
                </div>      

                <div className='input-group mb-3'>
                    <label className='input-group-text'>Release Date</label>
                    <input className='form-control' type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>  
                </div>

            </form>
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type='submit' variant="primary" onClick={handleSubmit}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
    </div>
    );
}
 
export default AddSong;


