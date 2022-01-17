import React, { useEffect, useState } from 'react';

const SearchBarSingle = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        //debugger
        let searchTermLower = searchTerm.toLowerCase()
        let songs = props.allSongs.filter (e => { //kept all if statements so that each 'e' would have to loop through each statement
            if(e.title.toLowerCase().includes(searchTermLower)){return true}; 
            if(e.album != null){ //need to handle null to prevent error of reading "null"
                if(e.album.toLowerCase().includes(searchTermLower)){return true}};
            if(e.artist.toLowerCase().includes(searchTermLower)){return true};
            if(e.genre != null){
                if(e.genre.toLowerCase().includes(searchTermLower)){return true}};
            if(e.release_date != null){
                if(e.release_date.toLowerCase().includes(searchTermLower)){return true}};
        });
    
        props.updateSetSongs(songs);
    },[searchTerm])

    useEffect(() => { //if a song is added while searching, will remove search terms
        setSearchTerm('')

    },[props.allSongs])


    return ( 
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
    );
}
 
export default SearchBarSingle;
