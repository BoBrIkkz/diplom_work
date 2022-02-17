const scroll = () => {

    const scrolllink = document.querySelector('.smooth-scroll');
    
    const checkY = () => {
        if (window.pageYOffset < 800) {
            scrolllink.style.display = "none"
        } else {
            scrolllink.style.display = "block"
        }
        scrolllink.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
    
        })
    }
    let timeout = window.setInterval(checkY, 100);
    

}
export default scroll