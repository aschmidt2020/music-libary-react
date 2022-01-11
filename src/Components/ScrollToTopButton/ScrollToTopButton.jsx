const ScrollToTopButton = (props) => {
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <button className='btn bg-transparent' onClick={scrollToTop} style={{'marginTop':'1em'}}><i className="bi bi-arrow-bar-up"></i></button>
    );
}
 
export default ScrollToTopButton;