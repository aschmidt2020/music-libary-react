import GetAllSongs from "../GetAllSongs/GetAllSongs";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            
                <a className="navbar-brand" href="#"><i className="bi bi-music-note-beamed">MusicLibrary</i></a>  
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" style={{'marginTop':'1em'}}>
                    <GetAllSongs navbar='true'/>
                    </li>
                    <li className="nav-item" style={{'marginTop':'1em'}}>
                    <SearchBar allSongs={props.allSongs} songs={props.songs} getSpecificSong={props.getSpecificSong}/>
                    </li>
                    <li className="nav-item" style={{'marginLeft': '2em'}}>
                    <ScrollToTopButton />
                    </li>
                </ul>
                
        </nav>
    );
}
 
export default NavBar;