var buttons = document.getElementsByClassName('slide-check');
var images = document.getElementsByClassName('slider-link');
var current_slide = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        buttons[i].classList.toggle('active-slide');
        current_slide = i;
        changeSlide(i);
    })
}

function changeSlide(i) {
    for (let j = 0; j < buttons.length; j++) {
        if (j !== i) {
            buttons[j].classList.remove('active-slide');
            images[j].style.display = "none";
            images[j].classList.remove('active-link');
        }
        if (j === i) {
            buttons[j].classList.add('active-slide');
            images[j].style.display = "block";
            images[j].classList.add('active-link');
        }
    }
}

function changePosition(position) {
    if(current_slide === 0 && position === 'left') {
        current_slide = 5;
    }
    else if(current_slide === 5 && position === 'right') {
        current_slide = 0;
    }
    else if (position === 'right') {
        current_slide++;
    } else {
        current_slide--;
    }
    changeSlide(current_slide);
}

document.getElementById('slide-left').addEventListener('click', () => {
    changePosition('left');
});
document.getElementById('slide-right').addEventListener('click', () => {
    changePosition('right')
});

