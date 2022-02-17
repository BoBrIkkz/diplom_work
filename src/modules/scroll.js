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
    const checkLoad = () => {
        if(window.pageYOffset < 800) {
            let timeout = window.setInterval(checkY, 100);
        }
       let timeoutLoad = window.setInterval(checkLoad, 100);

    }
    checkLoad()

    

}
export default scroll