
var yesBtn = document.querySelector('#yesBtn .yes');
var noBtn = document.querySelector('#noBtn .no');
var happycat = document.getElementById("happycat");
var pistol = document.getElementById("pistolet");
var confetti = document.getElementById("con");

var yesScale = 1;
var hoverCount = 0;

yesBtn.addEventListener("click", function () {
    happycat.style.display = "block";
    confetti.style.display = "block";
    lep.style.display = "block";
});

function runAway() {
    hoverCount++;

    if (hoverCount <= 3) {
        var noContainer = document.getElementById("noBtn");

        var x = Math.random() * (window.innerWidth - noContainer.clientWidth);
        var y = Math.random() * (window.innerHeight - noContainer.clientHeight);

        noContainer.style.position = "absolute";
        noContainer.style.left = x + "px";
        noContainer.style.top = y + "px";

        yesScale += 0.2;
        var yesContainer = document.getElementById("yesBtn");
        yesContainer.style.transform = "scale(" + yesScale + ")";
    }
    if (hoverCount >= 3) {
        noBtn.removeEventListener("mouseenter", runAway);
    }
}

noBtn.addEventListener("mouseenter", runAway);

noBtn.addEventListener("click", function () {
    if (hoverCount >= 3) {
        pistol.style.display = "block";
    }
});
