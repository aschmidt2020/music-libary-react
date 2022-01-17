const WelcomeText = (props) => {
    return ( 
        <div>
            <h1 className='text-align-center' style={{'marginTop':'2em'}}>Welcome to Music<small className='text-muted'>Library</small>!</h1>
          <p className="text-align-center" style={{'marginTop':'1em'}}>
          Welcome to your own MusicLibrary. You can easily search for a specific song from the Navigation Bar at the top of the page.
          <br></br>
          You can filter songs by selecting the <i className="bi bi-filter-square"></i> icon on the left-hand side.
          <br></br>
          You can also add a new song by selecting the <i className="bi bi-plus-lg"></i> icon on the left-hand side.
          <br></br>
          When you have completed any filtering or searching, use the 'Display All Songs' button to show all the songs again.
          <br></br>
          You can also Like A Song (<i className="bi bi-hand-thumbs-up"></i>), Edit A Song (<i className="bi bi-pen"></i>), and Delete A Song (<i className="bi bi-trash"></i>) within the table.
          <br></br>
          You can also Add A Song (<i className="bi bi-plus-lg"></i>), Filter (<i className="bi bi-filter-square"></i>), Display  All (<i className="bi bi-eye"></i>) or Scroll To Top (<i className="bi bi-arrow-bar-up"></i>) from the navigation bar.
          </p>
        </div>
     );
}
 
export default WelcomeText;