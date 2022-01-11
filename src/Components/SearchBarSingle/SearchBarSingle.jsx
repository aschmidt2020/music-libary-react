import React, { useEffect, useState } from 'react';

const SearchBarSingle = (props) => {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        let song = props.allSongs.filter (e => {
            if(e.title.includes(searchTerm)){return true}; //kept all if statements so that each 'e' would have to loop through each statement
            if(e.album.includes(searchTerm)){return true};
            if(e.artist.includes(searchTerm)){return true};
            if(e.genre.includes(searchTerm)){return true};
            if(e.releaseDate.includes(searchTerm)){return true};
        });
    
        props.getSpecificSong(song);
    },[searchTerm])


    return ( 
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
    );
}
 
export default SearchBarSingle;
