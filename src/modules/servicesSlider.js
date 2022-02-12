const servicesSlider = () => {

    const sliderLine = document.querySelector('.slider-line')
    const sliderSlide = document.querySelector('.slider-slide')
    let offset = 0

    document.querySelector('.services__arrow--right').addEventListener('click', function() {
        if (sliderSlide.offsetWidth < 556) {
            offset = offset + 555;
            if (offset > 1666) {
                offset = 0;
            }
        } else {

            offset = offset + 600
            if (offset > 1200) {
                offset = 0
            }
        }
        sliderLine.style.left = -offset + 'px'
    });

    document.querySelector('.services__arrow--left').addEventListener('click', function() {
        if (sliderSlide.offsetWidth < 556) {
            offset = offset - 555;
            if (offset <= 0) {
                offset = 1666;
            }
        } else {

            offset = offset - 600
            if (offset < 0) {
                offset = 1200
            }
        }
        sliderLine.style.left = -offset + 'px'
        console.log(offset)
    });
}


export default servicesSlider