export function initModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".enlargeable");

    function openModal(src, alt) {
        modal.style.display = "block";
        modalImg.src = src;
        modalImg.alt = alt;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    images.forEach(img => {
        img.addEventListener("click", () => openModal(img.src, img.alt));
    });

    closeBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    return {
        openModal,
        closeModal
    };
}