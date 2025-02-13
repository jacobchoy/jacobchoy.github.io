document.addEventListener("DOMContentLoaded", function() {
    const btnYes = document.createElement("button");
    btnYes.innerText = "Yes!";
    document.body.appendChild(btnYes);

    const btnNo = document.createElement("button");
    btnNo.innerText = "No!";
    document.body.appendChild(btnNo);

    btnYes.addEventListener("click", function() {
        alert("You clicked Yes!");
    });

    btnNo.addEventListener("click", function() {
        alert("You clicked No!");
    });
});
