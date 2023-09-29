let navBurger = document.querySelector('.nav-btn .fa-bars-staggered');
let navCross = document.querySelector('.nav-btn .fa-xmark');
let navigations = document.querySelector('.navigation');
let navButton = document.querySelector('.nav-btn');
let navAboutEl = document.querySelector('.navigation #about-el');
let aboutContentWrapper = document.querySelector('.about-content-wrap');
let userIntro = document.querySelector('.about-container #user-intro');

// navButton.addEventListener('click', function() {
//     if (navBurger.classList.contains('active')) {
//         navBurger.classList.remove('active');
//         navBurger.classList.add('close');
//         navCross.classList.add('active');
//         navCross.classList.remove('close');
//         navigations.classList.remove('set-width-zero');
//         navigations.classList.add('set-width');
//     }
//     else {
//         navBurger.classList.remove('close');
//         navBurger.classList.add('active');
//         navCross.classList.add('close');
//         navCross.classList.remove('active');
//         navigations.classList.remove('set-width');
//         navigations.classList.add('set-width-zero');
//     }
// });


let userIntroData = "";

$(document).ready(function() {
    $.get('../fileLoader.php', function(data) {
        var fileContents = JSON.parse(data);
        //$('#file-contents').text(fileContents);
        console.log(fileContents);
        userIntroData = fileContents.contents;
	    userIntro.textContent = userIntroData;
    });
});

//userIntro.textContent = userIntroData;

let deviceWidth = window.innerWidth;
let navBarStatus = true;
let navBarStatusMobile = true;
navButton.addEventListener('click', function() {
    if (deviceWidth < 400) {
        if (navBarStatusMobile == true) {
            navBurger.style.visibility = "hidden";
            navBurger.style.opacity = "0";
            navCross.style.visibility = "visible";
            navCross.style.opacity = "1";
            navigations.style.height = "200px";
            navigations.style.width = "330px";
            navigations.style.visibility = "visible";
            aboutContentWrapper.style.top = "150px";
            navBarStatusMobile = false;
        }
        else {
            navBurger.style.visibility = "visible";
            navBurger.style.opacity = "1";
            navCross.style.visibility = "hidden";
            navCross.style.opacity = "0";
            navigations.style.width = "60px";
            navigations.style.height = "60px";
            navigations.style.visibility = "hidden";
            aboutContentWrapper.style.top = "0";
            navBarStatusMobile = true;
        }
    }
    else {
        if (navBarStatus == true) {
            navBurger.style.visibility = "hidden";
            navBurger.style.opacity = "0";
            navCross.style.visibility = "visible";
            navCross.style.opacity = "1";
            navigations.style.width = "500px";
            navigations.style.visibility = "visible";
            navBarStatus = false;
        }
        else {
            navBurger.style.visibility = "visible";
            navBurger.style.opacity = "1";
            navCross.style.visibility = "hidden";
            navCross.style.opacity = "0";
            navigations.style.width = "60px";
            navigations.style.visibility = "hidden";
            navBarStatus = true;
        }
    }
    
});



if (!(document.hidden)) {
    navAboutEl.classList.add('set-color-white');
}

// let downloadBtn = document.querySelector('.profile-box .download-btn button');
// downloadBtn.addEventListener('click', function() {
//     downloadBtn.style.boxShadow = "none";
// });
