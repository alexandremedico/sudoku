let menu = document.getElementById('menu-burger');
document.getElementById('new-game').addEventListener('click', function () {
    menu.classList.remove('none');
    menu.classList.add('slide-in-right');
    setTimeout(() => {
        menu.classList.remove('slide-in-right');
    }, 700);
})


// envoie de la difficulté
document.getElementById('facile').addEventListener('click', function () {
    console.log(document.getElementById('facile').textContent);
});

document.getElementById('moyen').addEventListener('click', function () {
    console.log(document.getElementById('moyen').textContent);
});

document.getElementById('difficile').addEventListener('click', function () {
    console.log(document.getElementById('difficile').textContent);
});

document.getElementById('diabolique').addEventListener('click', function () {
    console.log(document.getElementById('diabolique').textContent);
});

document.getElementById('impossible').addEventListener('click', function () {
    console.log(document.getElementById('impossible').textContent);
});