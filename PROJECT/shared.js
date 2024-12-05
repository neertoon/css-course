let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButton = document.querySelectorAll('.plan button');

for (let button of selectPlanButton) {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });
}

