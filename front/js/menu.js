let menu = document.getElementById('menu-burger');
document.getElementById('new-game').addEventListener('click', function () {
    menu.classList.remove('none');
    menu.classList.add('slide-in-right');
    setTimeout(() => {
        menu.classList.remove('slide-in-right');
    }, 700);
})

document.getElementById('Retour').addEventListener('click', function () {
    menu.classList.add('slide-in-right-reverse');
    setTimeout(() => {
        menu.classList.remove('slide-in-right-reverse');
        menu.classList.add('none');
    }, 700);
})

window.addEventListener("DOMContentLoaded", function() {
    const socket = io();

    let header = document.getElementById('lien');
    socket.emit('changeBackground');
    socket.on('changeColorBackground', function (checked) {
        if (checked == true) {
            // passer en mode sombre
            console.log('je suis la');
            header.href = '../css/menu-dark.css';
        } else {
            // passer en mode clair
            console.log('je suis pas la');
            header.href = '../css/style.css';
        }
    })

    // envoie de la difficulté
    document.getElementById('facile').addEventListener('click', function () {
        console.log(document.getElementById('facile').value);
        let valueContent = document.getElementById('facile').value;
        socket.emit('value', valueContent);
    });

    document.getElementById('moyen').addEventListener('click', function () {
        console.log(document.getElementById('moyen').value);
        let valueContent = document.getElementById('moyen').value;
        socket.emit('value', valueContent);
    });

    document.getElementById('difficile').addEventListener('click', function () {
        console.log(document.getElementById('difficile').value);
        let valueContent = document.getElementById('difficile').value;
        socket.emit('value', valueContent);
    });

    document.getElementById('diabolique').addEventListener('click', function () {
        console.log(document.getElementById('diabolique').value);
        let valueContent = document.getElementById('diabolique').value;
        socket.emit('value', valueContent);
    });

    document.getElementById('impossible').addEventListener('click', function () {
        console.log(document.getElementById('impossible').value);
        let valueContent = document.getElementById('impossible').value;
        socket.emit('value', valueContent);
    });
})
