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
        <p class="trente-et-un"></p>
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
        <p class="quarante-et-un"></p>
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
        <p class="cinquante-et-un"></p>
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
        <p class="soixante-et-un"></p>
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
    let p22 = document.getElementsByClassName('vingt-deux')[0];
    let p23 = document.getElementsByClassName('vingt-trois')[0];
    let p24 = document.getElementsByClassName('vingt-quatre')[0];
    let p25 = document.getElementsByClassName('vingt-cinq')[0];
    let p26 = document.getElementsByClassName('vingt-six')[0];
    let p27 = document.getElementsByClassName('vingt-sept')[0];
    let p28 = document.getElementsByClassName('vingt-huit')[0];
    let p29 = document.getElementsByClassName('vingt-neuf')[0];
    let p30 = document.getElementsByClassName('trente')[0];
    let p31 = document.getElementsByClassName('trente-et-un')[0];
    let p32 = document.getElementsByClassName('trente-deux')[0];
    let p33 = document.getElementsByClassName('trente-trois')[0];
    let p34 = document.getElementsByClassName('trente-quatre')[0];
    let p35 = document.getElementsByClassName('trente-cinq')[0];
    let p36 = document.getElementsByClassName('trente-six')[0];
    let p37 = document.getElementsByClassName('trente-sept')[0];
    let p38 = document.getElementsByClassName('trente-huit')[0];
    let p39 = document.getElementsByClassName('trente-neuf')[0];
    let p40 = document.getElementsByClassName('quarante')[0];
    let p41 = document.getElementsByClassName('quarante-et-un')[0];
    let p42 = document.getElementsByClassName('quarante-deux')[0];
    let p43 = document.getElementsByClassName('quarante-trois')[0];
    let p44 = document.getElementsByClassName('quarante-quatre')[0];
    let p45 = document.getElementsByClassName('quarante-cinq')[0];
    let p46 = document.getElementsByClassName('quarante-six')[0];
    let p47 = document.getElementsByClassName('quarante-sept')[0];
    let p48 = document.getElementsByClassName('quarante-huit')[0];
    let p49 = document.getElementsByClassName('quarante-neuf')[0];
    let p50 = document.getElementsByClassName('cinquante')[0];
    let p51 = document.getElementsByClassName('cinquante-et-un')[0];
    let p52 = document.getElementsByClassName('cinquante-deux')[0];
    let p53 = document.getElementsByClassName('cinquante-trois')[0];
    let p54 = document.getElementsByClassName('cinquante-quatre')[0];
    let p55 = document.getElementsByClassName('cinquante-cinq')[0];
    let p56 = document.getElementsByClassName('cinquante-six')[0];
    let p57 = document.getElementsByClassName('cinquante-sept')[0];
    let p58 = document.getElementsByClassName('cinquante-huit')[0];
    let p59 = document.getElementsByClassName('cinquante-neuf')[0];
    let p60 = document.getElementsByClassName('soixante')[0];
    let p61 = document.getElementsByClassName('soixante-et-un')[0];
    let p62 = document.getElementsByClassName('soixante-deux')[0];
    let p63 = document.getElementsByClassName('soixante-trois')[0];
    let p64 = document.getElementsByClassName('soixante-quatre')[0];
    let p65 = document.getElementsByClassName('soixante-cinq')[0];
    let p66 = document.getElementsByClassName('soixante-six')[0];
    let p67 = document.getElementsByClassName('soixante-sept')[0];
    let p68 = document.getElementsByClassName('soixante-huit')[0];
    let p69 = document.getElementsByClassName('soixante-neuf')[0];
    let p70 = document.getElementsByClassName('soixante-dix')[0];
    let p71 = document.getElementsByClassName('soixante-et-onze')[0];
    let p72 = document.getElementsByClassName('soixante-douze')[0];
    let p73 = document.getElementsByClassName('soixante-treize')[0];
    let p74 = document.getElementsByClassName('soixante-quatorze')[0];
    let p75 = document.getElementsByClassName('soixante-quinze')[0];
    let p76 = document.getElementsByClassName('soixante-seize')[0];
    let p77 = document.getElementsByClassName('soixante-dix-sept')[0];
    let p78 = document.getElementsByClassName('soixante-dix-huit')[0];
    let p79 = document.getElementsByClassName('soixante-dix-neuf')[0];
    let p80 = document.getElementsByClassName('quatre-vingt')[0];
    let p81 = document.getElementsByClassName('quatre-vingt-un')[0];


    // retire la classe à toutes les cases
    function removeClass() {
        p1.classList.remove('fond-case');
        p2.classList.remove('fond-case');
        p3.classList.remove('fond-case');
        p4.classList.remove('fond-case');
        p5.classList.remove('fond-case');
        p6.classList.remove('fond-case');
        p7.classList.remove('fond-case');
        p8.classList.remove('fond-case');
        p9.classList.remove('fond-case');
        p10.classList.remove('fond-case');
        p11.classList.remove('fond-case');
        p12.classList.remove('fond-case');
        p13.classList.remove('fond-case');
        p14.classList.remove('fond-case');
        p15.classList.remove('fond-case');
        p16.classList.remove('fond-case');
        p17.classList.remove('fond-case');
        p18.classList.remove('fond-case');
        p19.classList.remove('fond-case');
        p20.classList.remove('fond-case');
        p21.classList.remove('fond-case');
        p22.classList.remove('fond-case');
        p23.classList.remove('fond-case');
        p24.classList.remove('fond-case');
        p25.classList.remove('fond-case');
        p26.classList.remove('fond-case');
        p27.classList.remove('fond-case');
        p28.classList.remove('fond-case');
        p29.classList.remove('fond-case');
        p30.classList.remove('fond-case');
        p31.classList.remove('fond-case');
        p32.classList.remove('fond-case');
        p33.classList.remove('fond-case');
        p34.classList.remove('fond-case');
        p35.classList.remove('fond-case');
        p36.classList.remove('fond-case');
        p37.classList.remove('fond-case');
        p38.classList.remove('fond-case');
        p39.classList.remove('fond-case');
        p40.classList.remove('fond-case');
        p41.classList.remove('fond-case');
        p42.classList.remove('fond-case');
        p43.classList.remove('fond-case');
        p44.classList.remove('fond-case');
        p45.classList.remove('fond-case');
        p46.classList.remove('fond-case');
        p47.classList.remove('fond-case');
        p48.classList.remove('fond-case');
        p49.classList.remove('fond-case');
        p50.classList.remove('fond-case');
        p51.classList.remove('fond-case');
        p52.classList.remove('fond-case');
        p53.classList.remove('fond-case');
        p54.classList.remove('fond-case');
        p55.classList.remove('fond-case');
        p56.classList.remove('fond-case');
        p57.classList.remove('fond-case');
        p58.classList.remove('fond-case');
        p59.classList.remove('fond-case');
        p60.classList.remove('fond-case');
        p61.classList.remove('fond-case');
        p62.classList.remove('fond-case');
        p63.classList.remove('fond-case');
        p64.classList.remove('fond-case');
        p65.classList.remove('fond-case');
        p66.classList.remove('fond-case');
        p67.classList.remove('fond-case');
        p68.classList.remove('fond-case');
        p69.classList.remove('fond-case');
        p70.classList.remove('fond-case');
        p71.classList.remove('fond-case');
        p72.classList.remove('fond-case');
        p73.classList.remove('fond-case');
        p74.classList.remove('fond-case');
        p75.classList.remove('fond-case');
        p76.classList.remove('fond-case');
        p77.classList.remove('fond-case');
        p78.classList.remove('fond-case');
        p79.classList.remove('fond-case');
        p80.classList.remove('fond-case');
        p81.classList.remove('fond-case');
    }
    
    // ajoute la séléction d'une case
    gBloc.addEventListener('click', function () {
        console.log(event);
        if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p1.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p2.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p3.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p4.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p5.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p6.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p7.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p8.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p9.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p10.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p11.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p12.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p13.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p14.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p15.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p16.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p17.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p18.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p19.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p20.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p21.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p22.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p23.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p24.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p25.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p26.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p27.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p28.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p29.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p30.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p31.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p32.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p33.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p34.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p35.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p36.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p37.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p38.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p39.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p40.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p41.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p42.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p43.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p44.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p45.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p46.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p47.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p48.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p49.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p50.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p51.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p52.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p53.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p54.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p55.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p56.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p57.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p58.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p59.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p60.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p61.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p62.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p63.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p64.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p65.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p66.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p67.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p68.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p69.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p70.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p71.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p72.classList.add('fond-case');
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p73.classList.add('fond-case');
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p74.classList.add('fond-case');
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p75.classList.add('fond-case');
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p76.classList.add('fond-case');
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p77.classList.add('fond-case');
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p78.classList.add('fond-case');
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p79.classList.add('fond-case');
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p80.classList.add('fond-case');
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p81.classList.add('fond-case');
        } else {
            alert()
        }
    })
})

