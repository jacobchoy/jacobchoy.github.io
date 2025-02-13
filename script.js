document.addEventListener("DOMContentLoaded", function() {
    const btnYes = document.createElement("button");
    btnYes.innerText = "Yes!";
    document.body.appendChild(btnYes);

    const btnNo = document.createElement("button");
    btnNo.innerText = "No!";
    document.body.appendChild(btnNo);

    // Confetti effect on "Yes!" button click
    btnYes.addEventListener("click", function() {
        alert("Woohooo!!!");
        confetti({ 
            particleCount: 100, 
            spread: 70, 
            origin: { x: 0.5, y: 0.5 } 
        });
    });

    // Alert for "No!" button click
    btnNo.addEventListener("click", function() {
        alert("aw what the hell man");
    });
});
