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
    })
    scrollLink.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" })

    })



}
export default scroll