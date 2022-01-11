import GetAllSongs from "../GetAllSongs/GetAllSongs";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{'backgroundColor' : '#e3f2fd'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="bi bi-music-note-beamed">MusicLibrary</i></a>  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav"  style={{'marginTop':'1em'}}>
                <SearchBar allSongs={props.allSongs} songs={props.songs} getSpecificSong={props.getSpecificSong}/>
                <GetAllSongs navbar='true' allSongs={props.allSongs} setAllSongs={props.setAllSongs}/>
                <ScrollToTopButton />
            </div>
            </div>
        </div>
        </nav>
    );
}
 
export default NavBar;