document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButton = document.querySelector(".close");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
