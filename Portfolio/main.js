let menuEl = document.querySelector('#menu');
let navigationsEl = document.getElementById('navigations');

let navBarStatus = true;
menuEl.addEventListener('click', function() {
    if (navBarStatus == true) {
        navigationsEl.style.display = "block";
        navigationsEl.style.opacity = 1;
        navBarStatus = false;
    }
    else {
        navigationsEl.style.display = "none";
        navigationsEl.style.opacity = 0;
        navBarStatus = true;
    }
});