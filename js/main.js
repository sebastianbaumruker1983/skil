document.addEventListener("DOMContentLoaded",function(){
    let sClicked = false;
    let kClicked = false;
    let iClicked = false;
    let lClicked = false;
    let lastClicked = false;

    document.querySelector("div.s").addEventListener("mouseover", function(e) {
        document.querySelector(".headline-left").setAttribute("style", "display: block");
    });

    document.querySelector("div.k").addEventListener("mouseover", function(e) {
        document.querySelector(".headline-top").setAttribute("style", "display: block");
    });

    document.querySelector("div.i").addEventListener("mouseover", function(e) {
        document.querySelector(".headline-right").setAttribute("style", "display: block");
    });

    document.querySelector("div.l").addEventListener("mouseover", function(e) {
        document.querySelector(".headline-bottom").setAttribute("style", "display: block");
    });

    document.querySelector("div.s").addEventListener("click", function(e) {
        if(!sClicked) {
            document.querySelectorAll("div.left :not(.headline-left)").forEach(element => {
                element.classList.toggle("fadeIn");
            });
        }
        sClicked = true;
    });

    document.querySelector("div.k").addEventListener("click", function(e) {
        if(!kClicked) {
            document.querySelectorAll("div.middle div.top :not(.headline-top)").forEach(element => {
                element.classList.toggle("fadeIn");
            });
        }
        kClicked = true;
    });

    document.querySelector("div.i").addEventListener("click", function(e) {
        if(!iClicked) {
            document.querySelectorAll("div.right :not(.headline-right)").forEach(element => {
                element.classList.toggle("fadeIn");
            });
        }
        iClicked = true;
    });

    document.querySelector("div.l").addEventListener("click", function(e) {
        if(!lClicked) {
            document.querySelectorAll("div.middle div.bottom :not(.headline-bottom)").forEach(element => {
                element.classList.toggle("fadeIn");
            });
        }
        lClicked = true;
    });

    document.querySelector("div.last").addEventListener("click", function(e) {
        if(!lastClicked) {
            document.querySelector(".lastRegion").setAttribute("style", "display: block");
        }
        lastClicked = true;
    });
});