const GetAllSongs = (props) => {
    if(props.navbar === 'false'){
        return ( 
            <button className='btn btn-primary text-align-center' onClick={() => {props.setAllSongs(props.allSongs)}} style={{'width':'100%'}}>Display All Songs</button>
         );
    }
    else if(props.navbar ==='true'){
        return ( 
            <button className='btn bg-transparent' onClick={() => {props.setAllSongs(props.allSongs)}}><i className="bi bi-eye"></i></button>
         );
    }
}
 
export default GetAllSongs;