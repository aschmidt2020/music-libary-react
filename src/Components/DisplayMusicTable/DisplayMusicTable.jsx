import { useEffect, useState } from 'react';
import AddLike from '../AddLike/AddLike';
import DeleteSong from '../DeleteSong/DeleteSong';
import SortByTitle from '../SortByTitle/SortByTitle';
import UpdateSong from '../UpdateSong/UpdateSong'
//?? release_date versus releaseDate

const DisplayMusicTable = (props) => {

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
      //debugger
      setRerender(!rerender);
      //debugger
      console.log(props.songs)
    }, [props.songs, props.allSongs])

    return ( 
        <table className="table table-striped table-hover text-align-center" style={{'marginTop' : '2em'}}>
        <thead>
          <tr>
            <th>Song Title <SortByTitle allSongs={props.allSongs} songs={props.songs} updateSetSongs={props.updateSetSongs} setSongsOrder={props.setSongsOrder}/></th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song, index) => {
            if(song.album_art_link != null){
              return (
                <tr key={song.id} id={index}>
                  <td>{song.title} </td>
                  <td>{song.album} <img src={song.album_art_link} style={{'height':'20px', 'width':'20px'}}/></td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>{song.release_date}</td> 
                  <td><AddLike song={song} updateSong={props.updateSong}/></td>
                  <td><UpdateSong song={song} updateSong={props.updateSong}/></td>
                  <td><DeleteSong song={song} deleteSong={props.deleteSong}/></td>
                </tr>
              )
            }
            return ( //parenthesis because you are returning multiple lines of code
                <tr key={song.id}>
                  <td>{song.title}</td>
                  <td>{song.album}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>{song.release_date}</td> 
                  <td><AddLike song={song} updateSong={props.updateSong}/></td>
                  <td><UpdateSong song={song} updateSong={props.updateSong}/></td>
                  <td><DeleteSong song={song} deleteSong={props.deleteSong}/></td>
                </tr>
            )
          })}
        </tbody>
        </table>
     );
}
 
export default DisplayMusicTable;
