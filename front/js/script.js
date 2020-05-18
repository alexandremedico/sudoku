window.addEventListener("DOMContentLoaded", function() {
    let gBloc = document.getElementById('gros-bloc');

    // ajout div et p
    gBloc.insertAdjacentHTML("afterbegin", `
    <div class="petit-bloc1">
        <p class="first-line un"></p>
        <p class="first-line deux"></p>
        <p class="first-line trois"></p>
        <p class="first-line quatre"></p>
        <p class="first-line cinq"></p>
        <p class="first-line six"></p>
        <p class="first-line sept"></p>
        <p class="first-line huit"></p>
        <p class="first-line neuf"></p>
    </div>
    <div class="petit-bloc2">
        <p class="dix"></p>
        <p class="onze"></p>
        <p class="douze"></p>
        <p class="treize"></p>
        <p class="quatorze"></p>
        <p class="quinze"></p>
        <p class="seize"></p>
        <p class="dix-sept"></p>
        <p class="dix-huit"></p>
    </div>
    <div class="petit-bloc3">
        <p class="dix-neuf"></p>
        <p class="vingt"></p>
        <p class="vingt-et-un"></p>
        <p class="vingt-deux"></p>
        <p class="vingt-trois"></p>
        <p class="vingt-quatre"></p>
        <p class="vingt-cinq"></p>
        <p class="vingt-six"></p>
        <p class="vingt-sept"></p>
    </div>
    <div class="petit-bloc4">
        <p class="vingt-huit"></p>
        <p class="vingt-neuf"></p>
        <p class="trente"></p>
        <p class="trente-un"></p>
        <p class="trente-deux"></p>
        <p class="trente-trois"></p>
        <p class="trente-quatre"></p>
        <p class="trente-cinq"></p>
        <p class="trente-six"></p>
    </div>
    <div class="petit-bloc5">
        <p class="trente-sept"></p>
        <p class="trente-huit"></p>
        <p class="trente-neuf"></p>
        <p class="quarante"></p>
        <p class="quarante-un"></p>
        <p class="quarante-deux"></p>
        <p class="quarante-trois"></p>
        <p class="quarante-quatre"></p>
        <p class="quarante-cinq"></p>
    </div>
    <div class="petit-bloc6">
        <p class="quarante-six"></p>
        <p class="quarante-sept"></p>
        <p class="quarante-huit"></p>
        <p class="quarante-neuf"></p>
        <p class="cinquante"></p>
        <p class="cinquante-un"></p>
        <p class="cinquante-deux"></p>
        <p class="cinquante-trois"></p>
        <p class="cinquante-quatre"></p>
    </div>
    <div class="petit-bloc7">
        <p class="cinquante-cinq"></p>
        <p class="cinquante-six"></p>
        <p class="cinquante-sept"></p>
        <p class="cinquante-huit"></p>
        <p class="cinquante-neuf"></p>
        <p class="soixante"></p>
        <p class="soixante-un"></p>
        <p class="soixante-deux"></p>
        <p class="soixante-trois"></p>
    </div>
    <div class="petit-bloc8">
        <p class="soixante-quatre"></p>
        <p class="soixante-cinq"></p>
        <p class="soixante-six"></p>
        <p class="soixante-sept"></p>
        <p class="soixante-huit"></p>
        <p class="soixante-neuf"></p>
        <p class="soixante-dix"></p>
        <p class="soixante-et-onze"></p>
        <p class="soixante-douze"></p>
    </div>
    <div class="petit-bloc9">
        <p class="last-line soixante-treize"></p>
        <p class="last-line soixante-quatorze"></p>
        <p class="last-line soixante-quinze"></p>
        <p class="last-line soixante-seize"></p>
        <p class="last-line soixante-dix-sept"></p>
        <p class="last-line soixante-dix-huit"></p>
        <p class="last-line soixante-dix-neuf"></p>
        <p class="last-line quatre-vingt"></p>
        <p class="last-line quatre-vingt-un"></p>
    </div>`);


    // event click case
    let p1 = document.getElementsByClassName('un')[0];
    let p2 = document.getElementsByClassName('deux')[0];
    let p3 = document.getElementsByClassName('trois')[0];
    let p4 = document.getElementsByClassName('quatre')[0];
    let p5 = document.getElementsByClassName('cinq')[0];
    let p6 = document.getElementsByClassName('six')[0];
    let p7 = document.getElementsByClassName('sept')[0];
    let p8 = document.getElementsByClassName('huit')[0];
    let p9 = document.getElementsByClassName('neuf')[0];
    let p10 = document.getElementsByClassName('dix')[0];
    let p11 = document.getElementsByClassName('onze')[0];
    let p12 = document.getElementsByClassName('douze')[0];
    let p13 = document.getElementsByClassName('treize')[0];
    let p14 = document.getElementsByClassName('quatorze')[0];
    let p15 = document.getElementsByClassName('quinze')[0];
    let p16 = document.getElementsByClassName('seize')[0];
    let p17 = document.getElementsByClassName('dix-sept')[0];
    let p18 = document.getElementsByClassName('dix-huit')[0];
    let p19 = document.getElementsByClassName('dix-neuf')[0];
    let p20 = document.getElementsByClassName('vingt')[0];
    let p21 = document.getElementsByClassName('vingt-et-un')[0];
    
    gBloc.addEventListener('click', function () {
        console.log(event);
        if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.add('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.add('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.add('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.add('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.add('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.add('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.add('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.add('fond-case');
            p9.classList.remove('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 68 && event.clientY <= 112) {
            p1.classList.remove('fond-case');
            p2.classList.remove('fond-case');
            p3.classList.remove('fond-case');
            p4.classList.remove('fond-case');
            p5.classList.remove('fond-case');
            p6.classList.remove('fond-case');
            p7.classList.remove('fond-case');
            p8.classList.remove('fond-case');
            p9.classList.add('fond-case');
        } else {
            alert()
        }
    })
})

