import React, { useState } from 'react';
import { getArtistCount } from './FilterArtistFunction'; 

const FilterMusic = (props) => {
    const [artists, setArtists] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedArtists, setSelectedArtists] = useState([])

    function handleClick() {
        let artists = getArtistCount(props.songs);
        setShow(!show);
        setArtists(artists);
    }

    
    function toggleCheckbox(event) {
        debugger
        let tempList = [...selectedArtists];
        
        if(tempList.includes(event.target.value)){
            let artistIndex = tempList.findIndex(e => {
                if(e == event.target.value){
                    return true
                }
            });

            tempList.splice(artistIndex, 1)
        }
        else {
            tempList.push(event.target.value)
        };
        debugger
        setSelectedArtists(tempList)
    }


    function handleSubmit(event){
        event.preventDefault();
        debugger
        let filteredSongs = props.songs.filter( e => {
            if(selectedArtists.includes(e.artist)){
                return true
            }
        })

        debugger
        props.getFilteredSongs(filteredSongs);
        resetForm();
    }

    function resetForm() {
        setSelectedArtists([]);
        setShow(false)
    }

    if(show){
        return(
            <div>
                <button onClick={handleClick}>
                <i className="bi bi-filter-square"></i>
                </button>

            <form onSubmit={handleSubmit}>
                <p>Filter by Artist</p>
                {artists.map((artist, index) => {
                    return (
                        <li key={index}><input type='checkbox' value={artist} onChange={toggleCheckbox} />{artist}</li>
                    )
                })}
                <button type='submit'>Filter</button>
            </form>
            </div>
        )
    }

    return (
        <button onClick={handleClick}>
        <i className="bi bi-filter-square"></i>
        </button>
     );
}
 
export default FilterMusic;