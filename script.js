document.addEventListener("DOMContentLoaded", function () {
    // Get the button container from the HTML
    const buttonContainer = document.querySelector(".button-container");

    // Create the "Yes!" button
    const btnYes = document.createElement("button");
    btnYes.innerText = "Yes!";
    btnYes.id = "yesButton"; // Add ID for styling
    buttonContainer.appendChild(btnYes);

    // Create the "No!" button
    const btnNo = document.createElement("button");
    btnNo.innerText = "No!";
    btnNo.id = "noButton"; // Add ID for styling
    buttonContainer.appendChild(btnNo);

    // Confetti effect on "Yes!" button click
    btnYes.addEventListener("click", function () {
        confetti({
            particleCount: 100,
            spread: 150,
            origin: { x: 0.5, y: 0.5 }, // Center of the screen
        });
        alert("Woohooo!!! You made my day! 💖");
    });

    // Alert for "No!" button click
    btnNo.addEventListener("click", function () {
        alert("Aww, what the hell man? 😢");
    });
});