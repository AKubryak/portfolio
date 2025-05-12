/* изменяет position у header с absolute на fixed */
export function initHeader() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}