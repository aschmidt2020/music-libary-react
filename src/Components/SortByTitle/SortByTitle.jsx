import React from 'react';

const SortByTitle = (props) => {

    function handleClick(event) {
        //debugger
        if(event.target.innerHTML === "Sort By Title"){
            props.getSongsOrder('title');
        }
        else if(event.target.innerHTML === "Sort By Recently Added"){
            props.getSongsOrder('recent');
        }

        else if(event.target.innerHTML === "Sort By Earliest Added"){
            props.getSongsOrder('oldest');
        };

    }


    return (
        <span className="dropdown">
            <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-toggle='popover' title='Sort Songs' data-content='Sort Songs' trigger='hover'>
            <i className="bi bi-funnel"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><button className="dropdown-item" onClick={handleClick}>Sort By Title</button></li>
                <li><button className="dropdown-item" onClick={handleClick}>Sort By Recently Added</button></li>
                <li><button className="dropdown-item" onClick={handleClick}>Sort By Earliest Added</button></li>
            </ul>
        </span>

        
     );
}
 
export default SortByTitle;