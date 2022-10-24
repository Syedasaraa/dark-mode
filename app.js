const htmlElements = document.documentElement;
const checkBox = document.querySelector('input[name="theme"]');
const paragraph = document.querySelector('p');
const checked = "And Mine";

checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
        htmlElements.classList.toggle('transition');
        htmlElements.setAttribute('data-theme', 'dark');
        paragraph.innerHTML = checked;
    } else {
        htmlElements.classList.toggle('transition');
        htmlElements.setAttribute('data-theme', 'light');
        paragraph.innerHTML = "You're an Idiot"
    }
})
