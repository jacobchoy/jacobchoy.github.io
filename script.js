document.addEventListener("DOMContentLoaded", () => {
    const confettiButton = document.getElementById("confettiButton");
    const toggleThemeButton = document.getElementById("toggleThemeButton");

    toggleThemeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    confettiButton.addEventListener("click", () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});
