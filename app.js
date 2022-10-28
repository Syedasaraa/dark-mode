const htmlElements = document.documentElement;
const checkBox = document.querySelector('input[name="theme"]');


checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
        htmlElements.classList.toggle('transition');
        htmlElements.setAttribute('data-theme', 'dark');
  
    } else {
        htmlElements.classList.toggle('transition');
        htmlElements.setAttribute('data-theme', 'light');
      
    }
})
