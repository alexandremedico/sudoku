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
})

var niveaux = {
    1 : 17, /*faible*/
    2 : 15, /*moyen*/
    3 : 13, /*difficile*/
    4 : 11, /*diabolique*/
    5 : 9 /* impossible*/
};