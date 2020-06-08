window.addEventListener("DOMContentLoaded", function() {
    const socket = io();

    let button = document.getElementsByClassName('apple-switch')[0];
    
    button.addEventListener('click', function () {
        if (button.checked == true) {
            // passer en mode sombre
            console.log(button.checked);
        } else {
            // passer en mode clair
            console.log(button.checked);
        }
    })
})