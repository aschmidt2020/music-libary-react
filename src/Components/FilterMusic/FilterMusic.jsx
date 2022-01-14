import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { getValues } from '../../Utils/FilterFunction';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FilterMusic = (props) => {
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [genres, setGenres] = useState([]);
    const [releaseDates, setReleaseDates] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => {setShowPage(!showPage)}

    const [showPage, setShowPage] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState([]);

    const filterPageBox = {
        marginLeft: '80%',
        marginTop: '1em'
    }

    useEffect(() => {
        let artistsList = getValues('artist', props.songs);
        let albumsList = getValues('album', props.songs);
        let genresList = getValues('genre', props.songs);
        let releaseDatesList = getValues('release_date', props.songs)

        setArtists(artistsList);
        setAlbums(albumsList);
        setGenres(genresList);
        setReleaseDates(releaseDatesList);
    }, [props.songs])

    function toggleCheckbox(event) {
        //debugger
        let tempList = [...selectedBoxes];
        
        if(tempList.includes(event.target.value)){
            let selectedIndex = tempList.findIndex(e => {
                if(e == event.target.value){
                    return true
                }
            });

            tempList.splice(selectedIndex, 1)
        }
        else {
            tempList.push(event.target.value)
        };
        //debugger
        setSelectedBoxes(tempList)
    }

    function handleSubmit(event){
        event.preventDefault();
        //debugger
        let filteredSongs = props.songs.filter( e => {
            if(selectedBoxes.includes(e.artist) || selectedBoxes.includes(e.album) || selectedBoxes.includes(e.genre) || selectedBoxes.includes(e.releaseDate)){
                return true;
            }
        })

        //debugger
        props.updateSetSongs(filteredSongs);
        resetForm();
    }

    function resetForm() {
        setSelectedBoxes([]);
        $('input[type=checkbox]').each(function() //resets all checkboxes to prevent a checkbox holding its current state after form submit
        { 
        this.checked = false; 
        }); 
        setShow(false);
        //debugger
    }

    function handleReset() {
        setSelectedBoxes([]);
        $('input[type=checkbox]').each(function() //resets all checkboxes to prevent a checkbox holding its current state after form reset
        { 
        this.checked = false; 
        }); 
        //debugger
        props.setAllSongs(props.allSongs);
        setShow(false);
        
    }

    if(props.navbar == 'true'){
        return(
            <>
            <Button variant="btn btn-outline-secondary" onClick={handleShow} style={{'marginTop':'0.5em'}} data-toggle='popover' title='Filter' data-content='Filter' trigger='hover'>
            <i className="bi bi-filter-square"></i>
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Filter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
      
              <form id='filterForm' onSubmit={handleSubmit}>
                    <span className='filter-list-text'>Filter by Artist</span>
                    {artists.map((artist, index) => {
                        return (
                            <li key={index} className='filter-list-text'><input type='checkbox' value={artist} onChange={toggleCheckbox} style={{'marginRight': '10px'}}/>{artist}</li>
                        )
                    })}

                    <span><br></br></span>

                    <span className='filter-list-text'>Filter by Album</span>
                    {albums.map((album, index) => {
                        return (
                            <li key={index} className='filter-list-text'><input type='checkbox' value={album} onChange={toggleCheckbox} style={{'marginRight': '10px'}}/>{album}</li>
                        )
                    })}

                    <span><br></br></span>

                    <span className='filter-list-text'>Filter by Genre</span>
                    {genres.map((genre, index) => {
                        return (
                            <li key={index} className='filter-list-text'><input type='checkbox' value={genre} onChange={toggleCheckbox} style={{'marginRight': '10px'}}/>{genre}</li>
                        )
                    })}

                    <span><br></br></span>

                    <span className='filter-list-text'>Filter by Release Dates</span>
                    {releaseDates.map((date, index) => {
                        return (
                            <li key={index} className='filter-list-text'><input type='checkbox' value={date} onChange={toggleCheckbox} style={{'marginRight': '10px'}}/>{date}</li>
                        )
                    })}

                    <span><br></br></span>
                </form>
              
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger"onClick={handleReset} type='reset'>
                  Reset All Filters
                </Button>
                <Button variant="secondary"onClick={handleClose}>
                  Close
                </Button>
                <Button type='submit' variant="primary" onClick={handleSubmit}>
                  Filter
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
    }

    return (
        <div style={filterPageBox}>
            <button className="btn btn-outline-secondary" data-toggle='popover' title='Filter' data-content='Filter' trigger='hover' onClick={handleClick}>
            <i className="bi bi-filter-square"></i>
            </button>
        </div>
     );
}
 
export default FilterMusic;