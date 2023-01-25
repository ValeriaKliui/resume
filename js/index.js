//add procent to language status-bar
const statusBars = document.querySelectorAll(".status-bar__procents");
const languages = ["english", "russian", "belorussian"];

function makeStatusBarProcent(lang) {
    for (const statusBar of statusBars) {
       if (statusBar.classList.contains(lang[0])) {
        statusBar.style.width = "70%"
       }
       else if (statusBar.classList.contains(lang[1])) {
        statusBar.style.width = "90%"
       }
       else if (statusBar.classList.contains(lang[2])) {
        statusBar.style.width = "80%"
       }
    }
}

makeStatusBarProcent(languages);


//typing letters
let word = document.querySelector('.about-me__title');
const wordText = word.innerText;
let result = '';
let seconds = 0;
const timerId = setInterval(toStartTyping,'80');

function toStartTyping() {
    seconds++;
    result = result+  `${wordText.charAt(seconds-1)}`;
    if (seconds%2 === 0) word.innerText = result;
    else word.innerText = result + ' |';
    if (wordText.length === result.length) clearInterval(timerId); 
}


//slider
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const photo = document.querySelector('.about-me__photo');
let counter = 0;
function changePhoto() {
    const gallery = ['profile-pic01.jpg', 'profile-pic02.jpeg', 'profile-pic03.jpg'];
    if (this.classList.contains('arrow-right')) counter++;
    else counter--;
    if (counter>=gallery.length) counter = gallery.length -1;
    if (counter<=0) counter = 0;
    photo.src= `assets/img/${gallery[counter]}`;
    changeArrow.call(this, gallery);
}

function changeArrow(gallery) {
    console.log(this);
    if (counter === gallery.length -1 || counter===0) {
        this.classList.add('disabled');
    }
    if (counter > 0) arrowLeft.classList.remove('disabled');
    if (counter < gallery.length - 1) arrowRight.classList.remove('disabled');
}

arrowRight.addEventListener('click', changePhoto);
arrowLeft.addEventListener('click', changePhoto);