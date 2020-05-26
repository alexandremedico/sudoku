let menu = document.getElementById('menu-burger');
document.getElementById('new-game').addEventListener('click', function () {
    menu.insertAdjacentHTML("beforeend", `
    <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
        <li><a href="./view/jeu.html">Facile</a></li>
        <li><a href="./view/jeu.html">Moyen</a></li>
        <li><a href="./view/jeu.html">Difficile</a></li>
        <li><a href="./view/jeu.html">Diaboblique</a></li>
        <li><a href="./view/jeu.html">Impossible</a></li>
        </ul>
    </div>`);
    menu.classList.add('slide-in-right');
    setTimeout(() => {
        menu.classList.remove('slide-in-right');
    }, 700);
})

var niveaux = {
    1 : 38, /*faible*/
    2 : 32, /*moyen*/
    3 : 26, /*difficile*/
    4 : 20, /*diabolique*/
    5 : 16 /* impossible*/
};