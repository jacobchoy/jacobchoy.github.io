document.addEventListener("DOMContentLoaded", () => {
    const confettiButton = document.getElementById("confettiButton");
    
    confettiButton.addEventListener("click", () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});
