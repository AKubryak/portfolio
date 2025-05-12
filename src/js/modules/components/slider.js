export function initSlider() {
    const swiperWrapper = document.querySelector('.custom-swiper__wrapper'),
          slides = document.querySelectorAll('.custom-swiper__slide'),
          prevButton = document.querySelector('.custom-swiper__button--prev'),
          nextButton = document.querySelector('.custom-swiper__button--next'),
          pagination = document.querySelector('.custom-swiper__pagination'),
          swiper = document.querySelector('.custom-swiper')

    let currentIndex = 0;
    let autoSlideInterval;

    // Создаем пагинацию
    slides.forEach((slide, index) => {
        const paginationDot = document.createElement('span');
        paginationDot.addEventListener('click', () => {
            goToSlide(index);
        });
        pagination.appendChild(paginationDot);
    });

    // Обновляем активный слайд и пагинацию
    function updateActiveSlide() {
        swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        const paginationDots = document.querySelectorAll('.custom-swiper__pagination span');
        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Переход к конкретному слайду
    function goToSlide(index) {
        currentIndex = index;
        updateActiveSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateActiveSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateActiveSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    swiper.addEventListener('mouseenter', stopAutoSlide);
    swiper.addEventListener('mouseleave', startAutoSlide);

    updateActiveSlide();

    return {
        startAutoSlide,
        stopAutoSlide,
        nextSlide,
        prevSlide,
        goToSlide
    };
}