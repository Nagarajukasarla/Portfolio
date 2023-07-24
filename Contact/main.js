let navBurger = document.querySelector(".nav-btn .fa-bars-staggered");
let navCross = document.querySelector(".nav-btn .fa-xmark");
let navigations = document.querySelector(".navigation");
let navButton = document.querySelector(".nav-btn");
let navContactEl = document.querySelector(".navigation #contact-el");
let contactBoxEl = document.querySelector(".contact-box");
let mainWrapEl = document.querySelector(".main-wrap");
let contactContentWrapper = document.querySelector(".contact-content-wrap");
let textMessage = document.querySelector("#text-message");
let fullName = document.querySelector("#full-name");
let email = document.querySelector("#email");
let requestBtn = document.querySelector("#request-btn");

let deviceWidth = window.innerWidth;
let navBarStatus = true;
let navBarStatusMobile = true;
navButton.addEventListener("click", function () {
    if (deviceWidth < 400) {
        if (navBarStatusMobile == true) {
            navBurger.style.visibility = "hidden";
            navBurger.style.opacity = "0";
            navCross.style.visibility = "visible";
            navCross.style.opacity = "1";
            navigations.style.height = "200px";
            navigations.style.width = "335px";
            navigations.style.visibility = "visible";
            contactContentWrapper.style.top = "220px";
            mainWrapEl.style.height = "1610px";
            contactBoxEl.style.height = "860px";
            navBarStatusMobile = false;
        } else {
            navBurger.style.visibility = "visible";
            navBurger.style.opacity = "1";
            navCross.style.visibility = "hidden";
            navCross.style.opacity = "0";
            navigations.style.width = "60px";
            navigations.style.height = "60px";
            navigations.style.visibility = "hidden";
            contactContentWrapper.style.top = "20px";
            mainWrapEl.style.height = "1410px";
            contactBoxEl.style.height = "670px";
            navBarStatusMobile = true;
        }
    } else {
        if (navBarStatus == true) {
            navBurger.style.visibility = "hidden";
            navBurger.style.opacity = "0";
            navCross.style.visibility = "visible";
            navCross.style.opacity = "1";
            navigations.style.width = "500px";
            navigations.style.visibility = "visible";
            navBarStatus = false;
        } else {
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

if (!document.hidden) {
    navContactEl.classList.add("set-color-white");
}

requestBtn.addEventListener("click", function () {
    sendMailTo(email.value, {
        subject: fullName.value + " is Requesting Access",
        body: textMessage.value,
    });
});

function sendMailTo(toEmail, { subject, body }) {
    let email = toEmail;

    if (subject !== null) {
        email += "?subject=" + encodeURIComponent(subject);
    }

    if (body !== null) {
        if (subject === null) {
            email += "?";
        } else {
            email += "&";
        }
        email += "body=" + encodeURIComponent(body);
    }

    window.location.href = "mailto:" + email;
}
