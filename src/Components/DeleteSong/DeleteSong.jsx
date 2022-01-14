import Button from 'react-bootstrap/Button';
//!Need eslint comment to prevent unexpected use of confirm error

const DeleteSong = (props) => {
    function handleClick(event) {
        event.preventDefault();
        // eslint-disable-next-line no-restricted-globals
        let confirmDelete = confirm(`Are you sure you would like to delete the following song:\n\nTitle: ${props.song.title}\nArtist: ${props.song.artist}\n\nSelect OK for yes and Cancel for no.`)
        debugger
        if (confirmDelete){
            props.deleteSong(props.song)
        }
    }

    return (
        <Button variant="btn btn-outline-secondary" style={{'marginLeft': '-2em'}} onClick={handleClick} data-toggle='popover' title='Delete Song' data-content='Delete Song' trigger='hover'>
            <i className="bi bi-trash"></i>
        </Button>
    );
}
 
export default DeleteSong;