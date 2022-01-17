const WelcomeText = (props) => {
    return ( 
        <div>
            <h1 className='text-align-center' style={{'marginTop':'2em'}}>Welcome to Music<small className='text-muted'>Library</small>!</h1>
          <p className="text-align-center" style={{'marginTop':'1em'}}>
          Welcome to your own MusicLibrary. You can easily search for a specific song from the Navigation Bar at the top of the page. 
          <br></br>
          After searching, simply erase all of the searched text and you will see all of your music again!
          <br></br>
          You can Sort (<i className="bi bi-funnel"></i>) your songs by Title, Recently Added, or Earliest Added.
          <br></br>
          You can Like A Song (<i className="bi bi-hand-thumbs-up"></i>), Edit A Song (<i className="bi bi-pen"></i>), and Delete A Song (<i className="bi bi-trash"></i>) within the table.
          <br></br>
          You can also Add A Song (<i className="bi bi-plus-lg"></i>), Filter (<i className="bi bi-filter-square"></i>), Display All Songs (<i className="bi bi-eye"></i>) or Scroll To Top (<i className="bi bi-arrow-bar-up"></i>) from the navigation bar.
          <br></br>
          When you have completed any filtering, use the 'Display All Songs' or 'Reset All Filters' button to show all the songs again. 
          </p>
        </div>
     );
}
 
export default WelcomeText;