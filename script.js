document.addEventListener("DOMContentLoaded", function() {
    const btn = document.createElement("button");
    btn.innerText = "Click Me!";
    document.body.appendChild(btn);
    
    btn.addEventListener("click", function() {
        alert("You clicked the button!");
    });
});
