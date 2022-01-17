import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const SortByTitle = (props) => {

    const [sortByTitle, setSortByTitle] = useState(false);

    function handleClick(event) {
        let oppositeState = !sortByTitle;
        setSortByTitle(oppositeState);
        props.setSongsOrder(oppositeState)

    }

    return ( 
        <Button variant="btn btn-link" onClick={handleClick} data-toggle='popover' title='Sort by Title/Time Added' data-content='Sort by Title/Time Added' trigger='hover'>
            <i className="bi bi-funnel"></i>
        </Button>
        
     );
}
 
export default SortByTitle;