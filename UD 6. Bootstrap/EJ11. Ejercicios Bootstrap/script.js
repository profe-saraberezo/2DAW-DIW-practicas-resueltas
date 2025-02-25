var div = document.querySelector(".cont-dif");
var div_slide = document.querySelector(".div_slide");

function showDiv() {
    console.log("showDIV");
    div.style.display = "flex";
    div_slide.classList.add("slide-in");
}

function hideDiv() {
    console.log("hideDIV");
    div_slide.classList.add("slide-out");
    div_slide.classList.remove("slide-in");

    setTimeout(function() {
        div.style.display = "none";
        div_slide.classList.remove("slide-out");
    }, 1000);

}