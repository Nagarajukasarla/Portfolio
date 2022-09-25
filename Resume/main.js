let navBurger = document.querySelector('.nav-btn .fa-bars-staggered');
let navCross = document.querySelector('.nav-btn .fa-xmark');
let navigations = document.querySelector('.navigation');
let navButton = document.querySelector('.nav-btn');
let navResumeEl = document.querySelector('.navigation #resume-el');
let resumeContentWrapper = document.querySelector('.resume-content-wrap');
let mainEl = document.querySelector('.main');
let resumeConatinerEl = document.querySelector('.resume-container');
// let aboutContentWrapper = document.querySelector('.about-content-wrap');  --> not in use now but requres for future development


if (!(document.hidden)) {
    navResumeEl.classList.add('set-color-white');
}

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
            navigations.style.width = "335px";
            navigations.style.visibility = "visible";
            resumeContentWrapper.style.top = "200px";
            mainEl.style.height = "2180px";
            resumeConatinerEl.style.height = "1460px";
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
            resumeContentWrapper.style.top = "0";
            mainEl.style.height = "2020px";
            resumeConatinerEl.style.height = "1280px";
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


// let deviceWidth = window.innerWidth;
// let navBarStatus = true;
// navButton.addEventListener('click', function() {
//     if (navBarStatus == true) {
//         navBurger.style.visibility = "hidden";
//         navBurger.style.opacity = "0";
//         navCross.style.visibility = "visible";
//         navCross.style.opacity = "1";
//         navigations.style.width = "500px";
//         navigations.style.visibility = "visible";
//         navBarStatus = false;
//     }
//     else {
//         navBurger.style.visibility = "visible";
//         navBurger.style.opacity = "1";
//         navCross.style.visibility = "hidden";
//         navCross.style.opacity = "0";
//         navigations.style.width = "60px";
//         navigations.style.visibility = "hidden";
//         navBarStatus = true;
//     }
// });

