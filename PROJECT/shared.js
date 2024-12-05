let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');

var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (let button of selectPlanButtons) {
    button.addEventListener('click', function() {
        modal.style.display = 'block';

        // modal.classList.add("open");
        // backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

// toggleButton.addEventListener("click", function() {
//     mobileNav.classList.add("open");
//     backdrop.classList.add("open");
// });


