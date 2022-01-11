const ScrollToTopButton = (props) => {
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <button className="btn btn-outline-secondary" data-toggle='popover' title='Scroll To Top' data-content='Scroll to Top' trigger='hover' onClick={scrollToTop} style={{'marginTop':'0.5em'}}><i className="bi bi-arrow-bar-up"></i></button>
    );
}
 
export default ScrollToTopButton;