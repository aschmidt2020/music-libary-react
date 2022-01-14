import GetAllSongs from "../GetAllSongs/GetAllSongs";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import SearchBarSingle from "../SearchBarSingle/SearchBarSingle";
import FilterMusic from "../FilterMusic/FilterMusic"
import AddSong from "../AddSong/AddSong";

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{'backgroundColor' : '#e3f2fd'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="bi bi-music-note-beamed">MusicLibrary</i></a>  
            <div className="nav-item"><SearchBarSingle allSongs={props.allSongs} songs={props.songs} updateSetSongs={props.updateSetSongs}/></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExpand" aria-controls="navbarExpand" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarExpand">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{'marginLeft':'60%'}}>
                <li className="nav-item" style={{'marginTop':'-0.5em','marginRight':'2em'}}><AddSong navbar='true' addSong={props.addSong}/></li>
                <li className="nav-item"><FilterMusic navbar='true' allSongs={props.allSongs} songs={props.songs} updateSetSongs={props.updateSetSongs} setAllSongs={props.setAllSongs}/></li>
                <li className="nav-item"><GetAllSongs navbar='true' allSongs={props.allSongs} setAllSongs={props.setAllSongs}/></li>
                <li className="nav-item"><ScrollToTopButton /></li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;