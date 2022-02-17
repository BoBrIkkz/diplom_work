const scroll = () => {

    const scrollLink = document.querySelector('.smooth-scroll');

    let counter = 0

    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 200) {
            scrollLink.style.display = "none"
            counter++
        }
        if (window.pageYOffset > 700 && counter > 0) {
            scrollLink.style.display = "block"
        }
        console.log(window.pageYOffset)
    })
    scrollLink.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: "smooth" });

        })
        // const checkLoad = () => {
        //     if(window.pageYOffset < 800) {
        //         let timeout = window.setInterval(checkY, 100);
        //     }
        //    let timeoutLoad = window.setInterval(checkLoad, 100);

    // }
    // checkLoad()



}
export default scroll