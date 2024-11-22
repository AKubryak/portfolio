/* изменяет position у header с absolute на fixed */
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 1) { // Замените 100 на нужное значение для триггера
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});