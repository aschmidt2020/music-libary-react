import React, { useState } from 'react';
import { getArtists } from './FilterArtistFunction'; 
import { getAlbums } from './FilterAlbumFunction';
import { getGenres } from './FilterGenreFunction';
import { getReleaseDates } from './FilterReleaseDateFunction';

const FilterMusic = (props) => {
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [genres, setGenres] = useState([]);
    const [releaseDates, setReleaseDates] = useState([])

    const [show, setShow] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState([])

    function handleClick() {
        let artists = getArtists(props.songs);
        let albums = getAlbums(props.songs);
        let genres = getGenres(props.songs);
        let releaseDatesList = getReleaseDates(props.songs);

        setShow(!show);
        setArtists(artists);
        setAlbums(albums);
        setGenres(genres);
        setReleaseDates(releaseDatesList);
    }

    
    function toggleCheckbox(event) {
        debugger
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
        debugger
        setSelectedBoxes(tempList)
    }


    function handleSubmit(event){
        event.preventDefault();
        debugger
        let filteredSongs = props.songs.filter( e => {
            if(selectedBoxes.includes(e.artist) || selectedBoxes.includes(e.album) || selectedBoxes.includes(e.genre) || selectedBoxes.includes(e.releaseDate)){
                return true;
            }
        })

        debugger
        props.getFilteredSongs(filteredSongs);
        resetForm();
    }

    function resetForm() {
        setSelectedBoxes([]);
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

                <p>Filter by Album</p>
                {albums.map((album, index) => {
                    return (
                        <li key={index}><input type='checkbox' value={album} onChange={toggleCheckbox} />{album}</li>
                    )
                })}

                <p>Filter by Genre</p>
                {genres.map((genre, index) => {
                    return (
                        <li key={index}><input type='checkbox' value={genre} onChange={toggleCheckbox} />{genre}</li>
                    )
                })}

                <p>Filter by Release Dates</p>
                {releaseDates.map((date, index) => {
                    return (
                        <li key={index}><input type='checkbox' value={date} onChange={toggleCheckbox} />{date}</li>
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