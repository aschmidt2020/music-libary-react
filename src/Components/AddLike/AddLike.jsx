import React from 'react';
import Button from 'react-bootstrap/Button';

const AddLike = (props) => {
    function handleClick(event){
        event.preventDefault();

        let newLikes = props.song.likes + 1;

        let updatedSong = {
          id: props.song.id,
          title: props.song.title,
          album_art_link: props.song.album_art_link,
          album: props.song.album,
          artist: props.song.artist,
          genre: props.song.genre,
          release_date: props.song.release_date,
          likes: newLikes
        }

        props.updateSong(updatedSong);
    }

    function handleClickDislike(event){
        event.preventDefault();

        let newLikes = props.song.likes - 1;

        let updatedSong = {
          id: props.song.id,
          title: props.song.title,
          album_art_link: props.song.album_art_link,
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
                <span>
                <Button variant="btn btn-outline-secondary" onClick={handleClick} data-toggle='popover' title='Add Like' data-content='Add Like' trigger='hover'>
                <i className="bi bi-hand-thumbs-up-fill"></i> {props.song.likes}
                </Button>

                <Button variant="btn btn-outline-secondary" onClick={handleClickDislike} style={{'marginLeft': '1em', 'marginRight':'1em'}} data-toggle='popover' title='Remove Like' data-content='Remove Like' trigger='hover'>
                <i className="bi bi-hand-thumbs-down"></i>
                </Button>
                </span>
        )

    }
    return (
            <Button variant="btn btn-outline-secondary" onClick={handleClick} style={{'marginRight': '4.5em'}} data-toggle='popover' title='Add Like' data-content='Add Like' trigger='hover'>
            &nbsp;<i className="bi bi-hand-thumbs-up"></i>&nbsp;&nbsp;
            </Button>

    );
    }

export default AddLike;