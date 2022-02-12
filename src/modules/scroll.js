const scroll = () => {

    const scrolllink = document.querySelector('.smooth-scroll');
    scrolllink.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

    })

}
export default scroll