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

    // envoie de la difficulté
    document.getElementById('facile').addEventListener('click', function () {
        console.log(document.getElementById('facile').textContent);
        let valueContent = document.getElementById('facile').textContent;
        socket.emit('value', valueContent);
    });

    document.getElementById('moyen').addEventListener('click', function () {
        console.log(document.getElementById('moyen').textContent);
        let valueContent = document.getElementById('moyen').textContent;
        socket.emit('value', valueContent);
    });

    document.getElementById('difficile').addEventListener('click', function () {
        console.log(document.getElementById('difficile').textContent);
        let valueContent = document.getElementById('difficile').textContent;
        socket.emit('value', valueContent);
    });

    document.getElementById('diabolique').addEventListener('click', function () {
        console.log(document.getElementById('diabolique').textContent);
        let valueContent = document.getElementById('diabolique').textContent;
        socket.emit('value', valueContent);
    });

    document.getElementById('impossible').addEventListener('click', function () {
        console.log(document.getElementById('impossible').textContent);
        let valueContent = document.getElementById('impossible').textContent;
        socket.emit('value', valueContent);
    });
})
