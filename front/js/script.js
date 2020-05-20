window.addEventListener("DOMContentLoaded", function() {
    let gBloc = document.getElementById('gros-bloc');
    let nombreBloc = document.getElementById('nombre');
    let chiffres = [];

    // ajout div et p
    gBloc.insertAdjacentHTML("afterbegin", `
    <div class="petit-bloc1">
        <p class="first-line un"></p>
        <p class="first-line deux"></p>
        <p class="first-line trois right-line"></p>
        <p class="first-line quatre"></p>
        <p class="first-line cinq"></p>
        <p class="first-line six right-line"></p>
        <p class="first-line sept"></p>
        <p class="first-line huit"></p>
        <p class="first-line neuf"></p>
    </div>
    <div class="petit-bloc2">
        <p class="dix"></p>
        <p class="onze"></p>
        <p class="douze right-line"></p>
        <p class="treize"></p>
        <p class="quatorze"></p>
        <p class="quinze right-line"></p>
        <p class="seize"></p>
        <p class="dix-sept"></p>
        <p class="dix-huit"></p>
    </div>
    <div class="petit-bloc3">
        <p class="dix-neuf bottom-line"></p>
        <p class="vingt bottom-line"></p>
        <p class="vingt-et-un right-line bottom-line"></p>
        <p class="vingt-deux bottom-line"></p>
        <p class="vingt-trois bottom-line"></p>
        <p class="vingt-quatre right-line bottom-line"></p>
        <p class="vingt-cinq bottom-line"></p>
        <p class="vingt-six bottom-line"></p>
        <p class="vingt-sept bottom-line"></p>
    </div>
    <div class="petit-bloc4">
        <p class="vingt-huit"></p>
        <p class="vingt-neuf"></p>
        <p class="trente right-line"></p>
        <p class="trente-et-un"></p>
        <p class="trente-deux"></p>
        <p class="trente-trois right-line"></p>
        <p class="trente-quatre"></p>
        <p class="trente-cinq"></p>
        <p class="trente-six"></p>
    </div>
    <div class="petit-bloc5">
        <p class="trente-sept"></p>
        <p class="trente-huit"></p>
        <p class="trente-neuf right-line"></p>
        <p class="quarante"></p>
        <p class="quarante-et-un"></p>
        <p class="quarante-deux right-line"></p>
        <p class="quarante-trois"></p>
        <p class="quarante-quatre"></p>
        <p class="quarante-cinq"></p>
    </div>
    <div class="petit-bloc6">
        <p class="quarante-six bottom-line"></p>
        <p class="quarante-sept bottom-line"></p>
        <p class="quarante-huit right-line bottom-line"></p>
        <p class="quarante-neuf bottom-line"></p>
        <p class="cinquante bottom-line"></p>
        <p class="cinquante-et-un right-line bottom-line"></p>
        <p class="cinquante-deux bottom-line"></p>
        <p class="cinquante-trois bottom-line"></p>
        <p class="cinquante-quatre bottom-line"></p>
    </div>
    <div class="petit-bloc7">
        <p class="cinquante-cinq"></p>
        <p class="cinquante-six"></p>
        <p class="cinquante-sept right-line"></p>
        <p class="cinquante-huit"></p>
        <p class="cinquante-neuf"></p>
        <p class="soixante right-line"></p>
        <p class="soixante-et-un"></p>
        <p class="soixante-deux"></p>
        <p class="soixante-trois"></p>
    </div>
    <div class="petit-bloc8">
        <p class="soixante-quatre"></p>
        <p class="soixante-cinq"></p>
        <p class="soixante-six right-line"></p>
        <p class="soixante-sept"></p>
        <p class="soixante-huit"></p>
        <p class="soixante-neuf right-line"></p>
        <p class="soixante-dix"></p>
        <p class="soixante-et-onze"></p>
        <p class="soixante-douze"></p>
    </div>
    <div class="petit-bloc9">
        <p class="last-line soixante-treize"></p>
        <p class="last-line soixante-quatorze"></p>
        <p class="last-line soixante-quinze right-line"></p>
        <p class="last-line soixante-seize"></p>
        <p class="last-line soixante-dix-sept"></p>
        <p class="last-line soixante-dix-huit right-line"></p>
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

    let un = document.getElementsByClassName('nombre-un')[0].textContent;
    let deux = document.getElementsByClassName('nombre-deux')[0].textContent;
    let trois = document.getElementsByClassName('nombre-trois')[0].textContent;
    let quatre = document.getElementsByClassName('nombre-quatre')[0].textContent;
    let cinq = document.getElementsByClassName('nombre-cinq')[0].textContent;
    let six = document.getElementsByClassName('nombre-six')[0].textContent;
    let sept = document.getElementsByClassName('nombre-sept')[0].textContent;
    let huit = document.getElementsByClassName('nombre-huit')[0].textContent;
    let neuf = document.getElementsByClassName('nombre-neuf')[0].textContent;

    // chiffre dans grille
    var puzzles = [
        "123745698459681732678392145269584371513267948784913526937412856826375194451869237",
        "126895374437621985958473126457983612193246578862517394269548731314769852785231649",
        "142685973936217458857394612329451867174862593568973241298534716745621389136789425",
        "158469372362587914794312658637215984259648173841973526726841593435796821189235467",
        "269548731314769852785231649126895374437621985958473126457983612193246578862517394",
        "362175948845963217179248635713296854458731629962584713439527681576184392821396457",
        "386751942574928361291364875614837529793245186528619743478293165659817432132456987",
        "418957632297643581563812794286571394354928716179436285723845169865139472941627358",
        "452371986618429573379865241734629815162845397598713624293148567754236981186957432",
        "531428679628579143749163825986217345214835967537496281792854163381796452654312978",
        "753896412196274538482153679385624971421759683967318245248567139365912847791834526",
        "872351946139264758654987321269587134843612975175439268418725693526391487793846512",
        "921437568583629174674158392283746195765912438419835267674319852251847396983526741",
        "954126783836759124172834956295431678371568492648297315849567312215983647763421589"];
    
    let puzzle = Math.round(Math.random() * 13);
    console.log(puzzle);
    console.log(puzzles[puzzle][0]);

    chiffres[0] = p1;
    chiffres[0].innerHTML = puzzles[puzzle][0];
    chiffres[1] = p2;
    chiffres[1].innerHTML = puzzles[puzzle][1];
    chiffres[2] = p3;
    chiffres[2].innerHTML = puzzles[puzzle][2];
    chiffres[3] = p4;
    chiffres[3].innerHTML = puzzles[puzzle][3];
    chiffres[4] = p5;
    chiffres[4].innerHTML = puzzles[puzzle][4];
    chiffres[5] = p6;
    chiffres[5].innerHTML = puzzles[puzzle][5];
    chiffres[6] = p7;
    chiffres[6].innerHTML = puzzles[puzzle][6];
    chiffres[7] = p8;
    chiffres[7].innerHTML = puzzles[puzzle][7];
    chiffres[8] = p9;
    chiffres[8].innerHTML = puzzles[puzzle][8];
    chiffres[9] = p10;
    chiffres[9].innerHTML = puzzles[puzzle][9];
    chiffres[10] = p11;
    chiffres[10].innerHTML = puzzles[puzzle][10];
    chiffres[11] = p12;
    chiffres[11].innerHTML = puzzles[puzzle][11];
    chiffres[12] = p13;
    chiffres[12].innerHTML = puzzles[puzzle][12];
    chiffres[13] = p14;
    chiffres[13].innerHTML = puzzles[puzzle][13];
    chiffres[14] = p15;
    chiffres[14].innerHTML = puzzles[puzzle][14];
    chiffres[15] = p16;
    chiffres[15].innerHTML = puzzles[puzzle][15];
    chiffres[16] = p17;
    chiffres[16].innerHTML = puzzles[puzzle][16];
    chiffres[17] = p18;
    chiffres[17].innerHTML = puzzles[puzzle][17];
    chiffres[18] = p19;
    chiffres[18].innerHTML = puzzles[puzzle][18];
    chiffres[19] = p20;
    chiffres[19].innerHTML = puzzles[puzzle][19];
    chiffres[20] = p21;
    chiffres[20].innerHTML = puzzles[puzzle][20];
    chiffres[21] = p22;
    chiffres[21].innerHTML = puzzles[puzzle][21];
    chiffres[22] = p23;
    chiffres[22].innerHTML = puzzles[puzzle][22];
    chiffres[23] = p24;
    chiffres[23].innerHTML = puzzles[puzzle][23];
    chiffres[24] = p25;
    chiffres[24].innerHTML = puzzles[puzzle][24];
    chiffres[25] = p26;
    chiffres[25].innerHTML = puzzles[puzzle][25];
    chiffres[26] = p27;
    chiffres[26].innerHTML = puzzles[puzzle][26];
    chiffres[27] = p28;
    chiffres[27].innerHTML = puzzles[puzzle][27];
    chiffres[28] = p29;
    chiffres[28].innerHTML = puzzles[puzzle][28];
    chiffres[29] = p30;
    chiffres[29].innerHTML = puzzles[puzzle][29];
    chiffres[30] = p31;
    chiffres[30].innerHTML = puzzles[puzzle][30];
    chiffres[31] = p32;
    chiffres[31].innerHTML = puzzles[puzzle][31];
    chiffres[32] = p33;
    chiffres[32].innerHTML = puzzles[puzzle][32];
    chiffres[33] = p34;
    chiffres[33].innerHTML = puzzles[puzzle][33];
    chiffres[34] = p35;
    chiffres[34].innerHTML = puzzles[puzzle][34];
    chiffres[35] = p36;
    chiffres[35].innerHTML = puzzles[puzzle][35];
    chiffres[36] = p37;
    chiffres[36].innerHTML = puzzles[puzzle][36];
    chiffres[37] = p38;
    chiffres[37].innerHTML = puzzles[puzzle][37];
    chiffres[38] = p39;
    chiffres[38].innerHTML = puzzles[puzzle][38];
    chiffres[39] = p40;
    chiffres[39].innerHTML = puzzles[puzzle][39];
    chiffres[40] = p41;
    chiffres[40].innerHTML = puzzles[puzzle][40];
    chiffres[41] = p42;
    chiffres[41].innerHTML = puzzles[puzzle][41];
    chiffres[42] = p43;
    chiffres[42].innerHTML = puzzles[puzzle][42];
    chiffres[43] = p44;
    chiffres[43].innerHTML = puzzles[puzzle][43];
    chiffres[44] = p45;
    chiffres[44].innerHTML = puzzles[puzzle][44];
    chiffres[45] = p46;
    chiffres[45].innerHTML = puzzles[puzzle][45];
    chiffres[46] = p47;
    chiffres[46].innerHTML = puzzles[puzzle][46];
    chiffres[47] = p48;
    chiffres[47].innerHTML = puzzles[puzzle][47];
    chiffres[48] = p49;
    chiffres[48].innerHTML = puzzles[puzzle][48];
    chiffres[49] = p50;
    chiffres[49].innerHTML = puzzles[puzzle][49];
    chiffres[50] = p51;
    chiffres[50].innerHTML = puzzles[puzzle][50];
    chiffres[51] = p52;
    chiffres[51].innerHTML = puzzles[puzzle][51];
    chiffres[52] = p53;
    chiffres[52].innerHTML = puzzles[puzzle][52];
    chiffres[53] = p54;
    chiffres[53].innerHTML = puzzles[puzzle][53];
    chiffres[54] = p55;
    chiffres[54].innerHTML = puzzles[puzzle][54];
    chiffres[55] = p56;
    chiffres[55].innerHTML = puzzles[puzzle][55];
    chiffres[56] = p57;
    chiffres[56].innerHTML = puzzles[puzzle][56];
    chiffres[57] = p58;
    chiffres[57].innerHTML = puzzles[puzzle][57];
    chiffres[58] = p59;
    chiffres[58].innerHTML = puzzles[puzzle][58];
    chiffres[59] = p60;
    chiffres[59].innerHTML = puzzles[puzzle][59];
    chiffres[60] = p61;
    chiffres[60].innerHTML = puzzles[puzzle][60];
    chiffres[61] = p62;
    chiffres[61].innerHTML = puzzles[puzzle][61];
    chiffres[62] = p63;
    chiffres[62].innerHTML = puzzles[puzzle][62];
    chiffres[63] = p64;
    chiffres[63].innerHTML = puzzles[puzzle][63];
    chiffres[64] = p65;
    chiffres[64].innerHTML = puzzles[puzzle][64];
    chiffres[65] = p66;
    chiffres[65].innerHTML = puzzles[puzzle][65];
    chiffres[66] = p67;
    chiffres[66].innerHTML = puzzles[puzzle][66];
    chiffres[67] = p68;
    chiffres[67].innerHTML = puzzles[puzzle][67];
    chiffres[68] = p69;
    chiffres[68].innerHTML = puzzles[puzzle][68];
    chiffres[69] = p70;
    chiffres[69].innerHTML = puzzles[puzzle][69];
    chiffres[70] = p71;
    chiffres[70].innerHTML = puzzles[puzzle][70];
    chiffres[71] = p72;
    chiffres[71].innerHTML = puzzles[puzzle][71];
    chiffres[72] = p73;
    chiffres[72].innerHTML = puzzles[puzzle][72];
    chiffres[73] = p74;
    chiffres[73].innerHTML = puzzles[puzzle][73];
    chiffres[74] = p75;
    chiffres[74].innerHTML = puzzles[puzzle][74];
    chiffres[75] = p76;
    chiffres[75].innerHTML = puzzles[puzzle][75];
    chiffres[76] = p77;
    chiffres[76].innerHTML = puzzles[puzzle][76];
    chiffres[77] = p78;
    chiffres[77].innerHTML = puzzles[puzzle][77];
    chiffres[78] = p79;
    chiffres[78].innerHTML = puzzles[puzzle][78];
    chiffres[79] = p80;
    chiffres[79].innerHTML = puzzles[puzzle][79];
    chiffres[80] = p81;
    chiffres[80].innerHTML = puzzles[puzzle][80];

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

    // ajout nombre dans case
    let nombre = [];
    let last;
    function ajoutNombre() {
        last = nombre[nombre.length - 1];
        nombreBloc.addEventListener('click', function () {
            if (event.clientX >= 0 && event.clientX <= 43 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = un;
            } else if (event.clientX >= 44 && event.clientX <= 84 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = deux;
            } else if (event.clientX >= 85 && event.clientX <= 125 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = trois;
            } else if (event.clientX >= 126 && event.clientX <= 166 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = quatre;
            } else if (event.clientX >= 167 && event.clientX <= 207 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = cinq;
            } else if (event.clientX >= 208 && event.clientX <= 248 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = six;
            } else if (event.clientX >= 249 && event.clientX <= 289 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = sept;
            } else if (event.clientX >= 290 && event.clientX <= 330 && event.clientY >= 470 && event.clientY <= 507){
                last.innerHTML = "";
                last.innerHTML = huit;
            } else if (event.clientX >= 331 && event.clientX <= 371 && event.clientY >= 470 && event.clientY <= 507) {
                last.innerHTML = "";
                last.innerHTML = neuf;
            }
        })
    }
    
    // ajoute la séléction d'une case
    gBloc.addEventListener('click', function () {
        if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p1.classList.add('fond-case');
            last = "";
            nombre.push(p1);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p2.classList.add('fond-case');
            last = "";
            nombre.push(p2);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p3.classList.add('fond-case');
            last = "";
            nombre.push(p3);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p4.classList.add('fond-case');
            last = "";
            nombre.push(p4);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p5.classList.add('fond-case');
            last = "";
            nombre.push(p5);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p6.classList.add('fond-case');
            last = "";
            nombre.push(p6);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p7.classList.add('fond-case');
            last = "";
            nombre.push(p7);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p8.classList.add('fond-case');
            last = "";
            nombre.push(p8);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 68 && event.clientY <= 112) {
            removeClass();
            p9.classList.add('fond-case');
            last = "";
            nombre.push(p9);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p10.classList.add('fond-case');
            last = "";
            nombre.push(p10);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p11.classList.add('fond-case');
            last = "";
            nombre.push(p11);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p12.classList.add('fond-case');
            last = "";
            nombre.push(p12);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p13.classList.add('fond-case');
            last = "";
            nombre.push(p13);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p14.classList.add('fond-case');
            last = "";
            nombre.push(p14);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p15.classList.add('fond-case');
            last = "";
            nombre.push(p15);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p16.classList.add('fond-case');
            last = "";
            nombre.push(p16);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p17.classList.add('fond-case');
            last = "";
            nombre.push(p17);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 112 && event.clientY <= 153) {
            removeClass();
            p18.classList.add('fond-case');
            last = "";
            nombre.push(p18);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p19.classList.add('fond-case');
            last = "";
            nombre.push(p19);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p20.classList.add('fond-case');
            last = "";
            nombre.push(p20);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p21.classList.add('fond-case');
            last = "";
            nombre.push(p21);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p22.classList.add('fond-case');
            last = "";
            nombre.push(p22);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p23.classList.add('fond-case');
            last = "";
            nombre.push(p23);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p24.classList.add('fond-case');
            last = "";
            nombre.push(p24);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p25.classList.add('fond-case');
            last = "";
            nombre.push(p25);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p26.classList.add('fond-case');
            last = "";
            nombre.push(p26);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 154 && event.clientY <= 195) {
            removeClass();
            p27.classList.add('fond-case');
            last = "";
            nombre.push(p27);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p28.classList.add('fond-case');
            last = "";
            nombre.push(p28);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p29.classList.add('fond-case');
            last = "";
            nombre.push(p29);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p30.classList.add('fond-case');
            last = "";
            nombre.push(p30);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p31.classList.add('fond-case');
            last = "";
            nombre.push(p31);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p32.classList.add('fond-case');
            last = "";
            nombre.push(p32);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p33.classList.add('fond-case');
            last = "";
            nombre.push(p33);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p34.classList.add('fond-case');
            last = "";
            nombre.push(p34);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p35.classList.add('fond-case');
            last = "";
            nombre.push(p35);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 196 && event.clientY <= 237) {
            removeClass();
            p36.classList.add('fond-case');
            last = "";
            nombre.push(p36);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p37.classList.add('fond-case');
            last = "";
            nombre.push(p37);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p38.classList.add('fond-case');
            last = "";
            nombre.push(p38);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p39.classList.add('fond-case');
            last = "";
            nombre.push(p39);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p40.classList.add('fond-case');
            last = "";
            nombre.push(p40);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p41.classList.add('fond-case');
            last = "";
            nombre.push(p41);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p42.classList.add('fond-case');
            last = "";
            nombre.push(p42);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p43.classList.add('fond-case');
            last = "";
            nombre.push(p43);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p44.classList.add('fond-case');
            last = "";
            nombre.push(p44);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 238 && event.clientY <= 279) {
            removeClass();
            p45.classList.add('fond-case');
            last = "";
            nombre.push(p45);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p46.classList.add('fond-case');
            last = "";
            nombre.push(p46);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p47.classList.add('fond-case');
            last = "";
            nombre.push(p47);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p48.classList.add('fond-case');
            last = "";
            nombre.push(p48);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p49.classList.add('fond-case');
            last = "";
            nombre.push(p49);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p50.classList.add('fond-case');
            last = "";
            nombre.push(p50);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p51.classList.add('fond-case');
            last = "";
            nombre.push(p51);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p52.classList.add('fond-case');
            last = "";
            nombre.push(p52);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p53.classList.add('fond-case');
            last = "";
            nombre.push(p53);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 280 && event.clientY <= 321) {
            removeClass();
            p54.classList.add('fond-case');
            last = "";
            nombre.push(p54);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p55.classList.add('fond-case');
            last = "";
            nombre.push(p55);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p56.classList.add('fond-case');
            last = "";
            nombre.push(p56);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p57.classList.add('fond-case');
            last = "";
            nombre.push(p57);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p58.classList.add('fond-case');
            last = "";
            nombre.push(p58);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p59.classList.add('fond-case');
            last = "";
            nombre.push(p59);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p60.classList.add('fond-case');
            last = "";
            nombre.push(p60);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p61.classList.add('fond-case');
            last = "";
            nombre.push(p61);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p62.classList.add('fond-case');
            last = "";
            nombre.push(p62);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 322 && event.clientY <= 363) {
            removeClass();
            p63.classList.add('fond-case');
            last = "";
            nombre.push(p63);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p64.classList.add('fond-case');
            last = "";
            nombre.push(p64);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p65.classList.add('fond-case');
            last = "";
            nombre.push(p65);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p66.classList.add('fond-case');
            last = "";
            nombre.push(p66);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p67.classList.add('fond-case');
            last = "";
            nombre.push(p67);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p68.classList.add('fond-case');
            last = "";
            nombre.push(p68);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p69.classList.add('fond-case');
            last = "";
            nombre.push(p69);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p70.classList.add('fond-case');
            last = "";
            nombre.push(p70);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p71.classList.add('fond-case');
            last = "";
            nombre.push(p71);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 364 && event.clientY <= 405) {
            removeClass();
            p72.classList.add('fond-case');
            last = "";
            nombre.push(p72);
            ajoutNombre(nombre);
        } else if (event.clientX >= 1 && event.clientX <= 43 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p73.classList.add('fond-case');
            last = "";
            nombre.push(p73);
            ajoutNombre(nombre);
        } else if (event.clientX >= 42 && event.clientX <= 81 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p74.classList.add('fond-case');
            last = "";
            nombre.push(p74);
            ajoutNombre(nombre);
        } else if (event.clientX >= 83 && event.clientX <= 124 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p75.classList.add('fond-case');
            last = "";
            nombre.push(p75);
            ajoutNombre(nombre);
        } else if (event.clientX >= 125 && event.clientX <= 166 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p76.classList.add('fond-case');
            last = "";
            nombre.push(p76);
            ajoutNombre(nombre);
        } else if (event.clientX >= 167 && event.clientX <= 208 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p77.classList.add('fond-case');
            last = "";
            nombre.push(p77);
            ajoutNombre(nombre);
        } else if (event.clientX >= 209 && event.clientX <= 250 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p78.classList.add('fond-case');
            last = "";
            nombre.push(p78);
            ajoutNombre(nombre);
        } else if (event.clientX >= 251 && event.clientX <= 292 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p79.classList.add('fond-case');
            last = "";
            nombre.push(p79);
            ajoutNombre(nombre);
        } else if (event.clientX >= 293 && event.clientX <= 334 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p80.classList.add('fond-case');
            last = "";
            nombre.push(p80);
            ajoutNombre(nombre);
        } else if (event.clientX >= 335 && event.clientX <= 376 && event.clientY >= 406 && event.clientY <= 449) {
            removeClass();
            p81.classList.add('fond-case');
            last = "";
            nombre.push(p81);
            ajoutNombre(nombre);
        } else {
            alert()
        }
    })
})

