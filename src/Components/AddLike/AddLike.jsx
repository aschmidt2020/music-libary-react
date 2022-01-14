import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const AddLike = (props) => {
    function handleClick(event){
        event.preventDefault();
        debugger

        let newLikes = props.song.likes + 1;

        let updatedSong = {
          id: props.song.id,
          title: props.song.title,
          album_art: null,
          album: props.song.album,
          artist: props.song.artist,
          genre: props.song.genre,
          release_date: props.song.release_date,
          likes: newLikes
        }

        props.updateSong(updatedSong);
    }

    if(props.song.likes > 0){
        return (
                <Button variant="btn btn-outline-secondary" onClick={handleClick} style={{'marginRight': '-4em'}} data-toggle='popover' title='Add Like' data-content='Add Like' trigger='hover'>
                <i className="bi bi-hand-thumbs-up-fill"></i>
                </Button>
        )

    }
    return (
            <Button variant="btn btn-outline-secondary" onClick={handleClick}  style={{'marginRight': '-4em'}} data-toggle='popover' title='Add Like' data-content='Add Like' trigger='hover'>
            <i className="bi bi-hand-thumbs-up"></i>
            </Button>

    );
    }

export default AddLike;