import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const SortByTitle = (props) => {

    const [sortByTitle, setSortByTitle] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        let oppositeState = !sortByTitle;
        setSortByTitle(oppositeState);
        if(oppositeState){
            let alphabetSongs = props.songs.sort(compareTitles);
            props.updateSetSongs(alphabetSongs)
        }
        else{
            let timeSongs = props.songs.sort(compareId)
            props.updateSetSongs(timeSongs)
        }

    }

    function compareTitles(x,y) 
        {
        if (x.title < y.title)
            return -1;
        if (x.title > y.title)
            return 1;
        return 0;
        }

    function compareId(x,y) 
        {
        if (x.id < y.id)
            return -1;
        if (x.id > y.id)
            return 1;
        return 0;
        }

    return ( 
        <Button variant="btn btn-link" onClick={handleClick} data-toggle='popover' title='Sort by Title/Time Added' data-content='Sort by Title/Time Added' trigger='hover'>
            <i className="bi bi-funnel"></i>
        </Button>
        
     );
}
 
export default SortByTitle;