window.addEventListener("DOMContentLoaded", function() {
    const socket = io();

    let header = document.getElementById('lien');
    let button = document.getElementsByTagName('input')[0];
    let buttonChecked = document.getElementsByTagName('input')[0].checked;
    // console.log(buttonChecked);
    
    button.addEventListener('click', function () {
        if (button.checked == true) {
            // passer en mode sombre
            buttonChecked = this.checked;
            header.href = '../css/options-dark.css';
            socket.emit('changeColor', buttonChecked);
        } else {
            // passer en mode clair
            buttonChecked = this.disabled;
            header.href = '../css/options.css';
            socket.emit('changeColor', buttonChecked);
        }
    })
    
    socket.emit('changeBackground');
    socket.on('changeColorBackground', function (checked) {
        if (checked == true) {
            // passer en mode sombre
            buttonChecked = this.checked;
            // document.getElementById('background').style.backgroundColor = '#2ecc71';
            header.href = '../css/options-dark.css';
        } else {
            // passer en mode clair
            buttonChecked = this.disabled;
            header.href = '../css/options.css';
        }
    })
})