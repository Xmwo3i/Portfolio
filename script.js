document.addEventListener("DOMContentLoaded",function(){
    let nav = Array.from(document.querySelectorAll("li"));
    nav.forEach(function(it) {
        it.onclick = function() {
        nav.forEach(function(el) {
            el.classList.remove("active");
            });
            this.classList.toggle("active");
        };
    });
    let buttons = document.querySelectorAll(".context a");
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            let parentCard = this.closest(".card");
            let circle = parentCard.querySelector(".circle");
            circle.style.transition = "clip-path 1s ease-in-out";
            circle.style.clipPath = "circle(450px at center 0)";
            let context = parentCard.querySelector(".context");
            context.style.animationPlayState = "running";
            parentCard.querySelector(".game").style["animation-play-state"] = "running";
            context.addEventListener("animationend",function(){
                context.remove();
            })
        });
    });
});
