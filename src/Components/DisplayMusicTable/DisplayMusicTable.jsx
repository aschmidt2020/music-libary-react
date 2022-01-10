const DisplayMusicTable = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Song Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.songs.map((song, index) => {
            return ( //parenthesis because you are returning multiple lines of code
                <tr key={index}>
                  <td>{song.id}</td> 
                  <td>{song.title}</td>
                  <td>{song.album}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>{song.releaseDate}</td>
                </tr>
            )
          })}
        </tbody>
        </table>
     );
}
 
export default DisplayMusicTable;