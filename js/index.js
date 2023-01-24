//add procent to language status-bar
const statusBars = document.querySelectorAll(".status-bar__procents");
const languages = ["english", "russian", "belorussian"];

function makeStatusBarProcent(lang) {
    for (const statusBar of statusBars) {
       if (statusBar.classList.contains(languages[0])) {
        statusBar.style.width = "60%"
       }
       else if (statusBar.classList.contains(languages[1])) {
        statusBar.style.width = "90%"
       }
       else if (statusBar.classList.contains(languages[2])) {
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
let timerId = setInterval(toStartTyping,'200');

function toStartTyping() {
    seconds++;
    result = result+  `${wordText.charAt(seconds-1)}`;
    word.classList.toggle('typing');
    word.innerText = result;
    if (wordText.length === result.length) clearInterval(timerId); 
}

