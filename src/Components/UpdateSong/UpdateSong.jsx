import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const UpdateSong = (props) => {
    const [title, setTitle] = useState(props.song.title);
    const [albumArt, setAlbumArt] = useState(props.song.album_art_link)
    const [album, setAlbum] = useState(props.song.album);
    const [artist, setArtist] = useState(props.song.artist);
    const [genre, setGenre] = useState(props.song.genre);
    const [releaseDate, setReleaseDate] = useState(props.song.release_date);
    const [likes, setLikes] = useState(props.song.likes);
    const [show, setShow] = useState(false);

    function handleCloseReset () { //when clicking close button will set useStates to original values before edits
     setShow(false);
     setTitle(props.song.title);
     setAlbum(props.song.album);
     setAlbumArt(props.song.album_art_link);
     setArtist(props.song.artist);
     setGenre(props.song.genre);
     setReleaseDate(props.song.release_date);
     setLikes(props.song.likes);

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // function handleImageChange(event){
    //     setAlbumArt(event.target.files[0]);
    //     debugger
    // }

    function handleSubmit(event){
        event.preventDefault();
        debugger
        let updatedSong = {
          id: props.song.id,
          title: title,
          album_art_link: albumArt,
          album: album,
          artist: artist,
          genre: genre,
          release_date: releaseDate,
          likes: likes
        }
        props.updateSong(updatedSong);
        handleClose();
    }

    return (
            <div style={{'marginLeft':'80%'}}>
              <Button variant="btn btn-outline-secondary" onClick={handleShow} data-toggle='popover' title='Edit Song' data-content='Edit Song' trigger='hover'>
              <i className="bi bi-pen"></i>
              </Button>
    
              <Modal show={show} onHide={handleCloseReset}>
                <Modal.Header closeButton>
                  <Modal.Title>Update Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
    
                <form className='search-form' onSubmit={handleSubmit} encType="multipart/form-data">
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
                        <label className='input-group-text'>Album Art Link</label>
                        <input className='form-control' type='text' onChange={(event) => setAlbumArt(event.target.value)}/>
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
                  <Button variant="secondary" onClick={handleCloseReset}>
                    Close
                  </Button>
                  <Button type='submit' variant="primary" onClick={handleSubmit}>
                    Update
                  </Button>
                </Modal.Footer>
              </Modal>
        </div>
    );
}
 
export default UpdateSong;