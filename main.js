//SLIDE CODE
var btnSlideLeft = document.getElementById("btn-left");
var btnSlideRight = document.getElementById("btn-right");

var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";

    switch (slideIndex) {
        case 1:
        document.getElementById("titleinfo").innerHTML = "Camera One Step 2";
        document.getElementById("pinfo").innerHTML = "The OneStep 2 is the new polaroid camera that blends classic design with contemporary style to bring you the best experience.";
            break;
        case 2:
        document.getElementById("titleinfo").innerHTML = "Polaroid Snap";
        document.getElementById("pinfo").innerHTML = "The Polaroid Snap is the perfect blend of nostalgic Polaroid instant photography and modern, digital technology for you.";
            break;
        case 3:
        document.getElementById("titleinfo").innerHTML = "Polaroid z2300";
        document.getElementById("pinfo").innerHTML = "The z2300 is the new polaroid camera that blends classic design with contemporary style to bring you the best experience.";
            break;
        case 4:
        document.getElementById("titleinfo").innerHTML = "Polaroid Cube";
        document.getElementById("pinfo").innerHTML = "Now with Wi-Fi, the new Polaroid Cube+ lifestyle action camera makes sharing your favorite photos and videos even easier in history ";
            break;
    }

}