import React, { useEffect, useState } from 'react';

const SearchBarSingle = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        let searchTermLower = searchTerm.toLowerCase()
        let song = props.allSongs.filter (e => {
            if(e.title.toLowerCase().includes(searchTermLower)){return true}; //kept all if statements so that each 'e' would have to loop through each statement
            if(e.album.toLowerCase().includes(searchTermLower)){return true};
            if(e.artist.toLowerCase().includes(searchTermLower)){return true};
            if(e.genre.toLowerCase().includes(searchTermLower)){return true};
            if(e.release_date.toLowerCase().includes(searchTermLower)){return true};
        });
    
        props.updateSetSongs(song);
    },[searchTerm])


    return ( 
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
    );
}
 
export default SearchBarSingle;
