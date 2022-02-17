const servicesSlider = () => {
    const sliderLine = document.querySelector('.slider-line')
    const sliderSlide = document.querySelector('.slider-slide')
    let offset = 0
    document.querySelector('.services__arrow--right').addEventListener('click', () => {
        if (sliderSlide.offsetWidth < 556) {
            offset = offset + sliderSlide.offsetWidth;
            if (offset > 1666) {
                offset = 0;
            }
        } else {

            offset = offset + sliderSlide.offsetWidth
            if (offset > 1200) {
                offset = 0
            }
        }
        sliderLine.style.left = -offset + 'px'
    })
    document.querySelector('.services__arrow--left').addEventListener('click', () => {
        if (sliderSlide.offsetWidth < 556) {
            offset = offset - sliderSlide.offsetWidth;
            if (offset <= 0) {
                offset = 1666;
            }
        } else {

            offset = offset - sliderSlide.offsetWidth
            if (offset < 0) {
                offset = 1200
            }
        }
        sliderLine.style.left = -offset + 'px'
    })
    let benefitsOffset = 0
    const sliderBlock = document.querySelector('.benefits-wrap')
    const slides = document.querySelector('.benefits__item')
    document.querySelector('.benefits__arrow--right').addEventListener('click', () => {
        console.log(benefitsOffset)
        if (slides.offsetWidth < 555) {
            benefitsOffset = benefitsOffset + slides.offsetWidth;
            if (benefitsOffset > 555) {
                benefitsOffset = 0;
            }
        }
        sliderBlock.style.left = -benefitsOffset + 'px'
    })
    document.querySelector('.benefits__arrow--left').addEventListener('click', () => {
        console.log(benefitsOffset)
        if (slides.offsetWidth < 555) {
            benefitsOffset = benefitsOffset - slides.offsetWidth;
            if (benefitsOffset <= -185) {
                benefitsOffset = 555;
            }
        }
        sliderBlock.style.left = -benefitsOffset + 'px'
    })
}


export default servicesSlider