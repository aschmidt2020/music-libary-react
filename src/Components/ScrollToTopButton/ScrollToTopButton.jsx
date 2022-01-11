const ScrollToTopButton = (props) => {
    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

    return (
        <button className='btn bg-transparent' onClick={scrollToTop}><i className="bi bi-arrow-bar-up"></i></button>
    );
}
 
export default ScrollToTopButton;