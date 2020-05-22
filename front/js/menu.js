let menu = document.getElementById('menu-burger');
document.getElementById('new-game').addEventListener('click', function () {
    menu.insertAdjacentHTML("beforeend", `
    <div id="sidebarMenu">
    <ul class="sidebarMenuInner">
    <li><a href="./view/jeu.html">Facile</a></li>
    <li><a href="./view/jeu.html">Moyen</a></li>
    <li><a href="./view/jeu.html">Difficile</a></li>
    </ul>
    </div>`);
    menu.classList.add('slide-in-right');
})