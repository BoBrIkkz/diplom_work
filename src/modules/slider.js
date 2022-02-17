const slider = () => {
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
        if (window.innerWidth > 576 && slides.offsetWidth < slides.offsetWidth * 3) {
            benefitsOffset = benefitsOffset + slides.offsetWidth;
            if (benefitsOffset > slides.offsetWidth * 3) {
                benefitsOffset = 0;
            }
        } else if (window.innerWidth < 576 && slides.offsetWidth < slides.offsetWidth * 5) {
            benefitsOffset = benefitsOffset + slides.offsetWidth;
            if (benefitsOffset > slides.offsetWidth * 5) {
                benefitsOffset = 0;
            }
        }
        sliderBlock.style.left = -benefitsOffset + 'px'
    })
    document.querySelector('.benefits__arrow--left').addEventListener('click', () => {
        if (window.innerWidth > 576 && slides.offsetWidth < slides.offsetWidth * 3) {
            benefitsOffset = benefitsOffset - slides.offsetWidth;
            if (benefitsOffset <= -185) {
                benefitsOffset = slides.offsetWidth * 3;
            }
        } else if (window.innerWidth < 576 && slides.offsetWidth < slides.offsetWidth * 5) {
            benefitsOffset = benefitsOffset - slides.offsetWidth;
            if (benefitsOffset <= -185) {
                benefitsOffset = slides.offsetWidth * 5;
            }
        }
        sliderBlock.style.left = -benefitsOffset + 'px'
    })
}


export default slider