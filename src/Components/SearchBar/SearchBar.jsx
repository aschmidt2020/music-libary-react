import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let releaseDateFormat = releaseDate[5] + releaseDate[6] + '/' + releaseDate[8] + releaseDate[9] + '/' + releaseDate [0] + releaseDate [1] + releaseDate [2] + releaseDate [3]
        
        debugger
        
        let song = props.songs.filter (e => {
                     if(e.title == title){return true};
                     if(e.album == album){return true};
                     if(e.artist == artist){return true};
                     if(e.genre == genre){return true};
                     if(e.releaseDate == releaseDateFormat){return true};
                 });
        props.getSpecificSong(song);
        resetForm();
    }

    function resetForm(){
        setTitle('');
        setAlbum('');
        setArtist('');
        setGenre('');
        setReleaseDate('');
    }

    return (  
        <form onSubmit={handleSubmit}>

            <label>Title</label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>     

            <label>Artist</label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>     

            <label>Album</label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>

            <label>Genre</label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>     

            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>     

            <button type='submit' style={{'marginTop': '1em'}}>Search</button>
        </form>
    );
}
 
export default SearchBar;


