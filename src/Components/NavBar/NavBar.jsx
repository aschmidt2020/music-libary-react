import GetAllSongs from "../GetAllSongs/GetAllSongs";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import SearchBarSingle from "../SearchBarSingle/SearchBarSingle";


const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{'backgroundColor' : '#e3f2fd'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><i className="bi bi-music-note-beamed">MusicLibrary</i></a>  
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{'marginLeft':'70%'}}>
                <li className="nav-item"><GetAllSongs navbar='true' allSongs={props.allSongs} setAllSongs={props.setAllSongs}/></li>
                <li className="nav-item"><ScrollToTopButton /></li>
                <li className="nav-item"><SearchBarSingle allSongs={props.allSongs} songs={props.songs} getSpecificSong={props.getSpecificSong}/></li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;