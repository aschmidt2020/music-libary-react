import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const SearchBarSingle = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        
        let song = props.songs.filter (e => {
                     if(e.title.includes(searchTerm)){return true};
                     if(e.album.includes(searchTerm)){return true};
                     if(e.artist.includes(searchTerm)){return true};
                     if(e.genre.includes(searchTerm)){return true};
                     if(e.releaseDate.includes(searchTerm)){return true};
                 });
                
        //debugger
        props.getSpecificSong(song);

        resetForm();
    }

    function resetForm(){
        setSearchTerm('');
    }

    return ( 
        <form className="d-flex" onSubmit={handleSubmit} style={{'marginTop':'1em'}}>
        <input style={{'marginLeft':'3em'}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(event)=>{setSearchTerm(event.target.value)}} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    );
}
 
export default SearchBarSingle;


