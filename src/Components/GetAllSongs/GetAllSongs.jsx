const GetAllSongs = (props) => {
    if(props.navbar === 'false'){
        return ( 
            <button className='btn btn-primary text-align-center' onClick={() => {props.setAllSongs(props.allSongs)}} style={{'width':'100%'}}>Display All Songs</button>
         );
    }
    else if(props.navbar ==='true'){
        return ( 
            <button className="btn btn-outline-secondary" style={{'marginTop':'0.5em'}} data-toggle='popover' title='Display All Songs' data-content='Display All Songs' trigger='hover' onClick={() => {props.setAllSongs(props.allSongs)}}><i className="bi bi-eye"></i></button>
         );
    }
}
 
export default GetAllSongs;