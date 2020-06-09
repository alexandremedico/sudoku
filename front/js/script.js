window.addEventListener("DOMContentLoaded", function() {
    const socket = io();
    let gBloc = document.getElementById('gros-bloc');
    let nombreBloc = document.getElementById('nombre');
    let niveaux = {
        1 : 38,
        2 : 32,
        3 : 26,
        4 : 20,
        5 : 16 
    };
    let value;
    let chiffreAffiche = [];
    let j = 0;
    let nombreAlea;

    let classe = {
        1 : 'un',
        2 : 'deux',
        3 : 'trois',
        4 : 'quatre',
        5 : 'cinq',
        6 : 'six',
        7 : 'sept',
        8 : 'huit',
        9 : 'neuf',
        10 : 'dix',
        11 : 'onze',
        12 : 'douze',
        13 : 'treize',
        14 : 'quatorze',
        15 : 'quinze',
        16 : 'seize',
        17 : 'dix-sept',
        18 : 'dix-huit',
        19 : 'dix-neuf',
        20 : 'vingt',
        21 : 'vingt-et-un',
        22 : 'vingt-deux',
        23 : 'vingt-trois',
        24 : 'vingt-quatre',
        25 : 'vingt-cinq',
        26 : 'vingt-six',
        27 : 'vingt-sept',
        28 : 'vingt-huit',
        29 : 'vingt-neuf',
        30 : 'trente',
        31 : 'trente-et-un',
        32 : 'trente-deux',
        33 : 'trente-trois',
        34 : 'trente-quatre',
        35 : 'trente-cinq',
        36 : 'trente-six',
        37 : 'trente-sept',
        38 : 'trente-huit',
        39 : 'trente-neuf',
        40 : 'quarante',
        41 : 'quarante-et-un',
        42 : 'quarante-deux',
        43 : 'quarante-trois',
        44 : 'quarante-quatre',
        45 : 'quarante-cinq',
        46 : 'quarante-six',
        47 : 'quarante-sept',
        48 : 'quarante-huit',
        49 : 'quarante-neuf',
        50 : 'cinquante',
        51 : 'cinquante-et-un',
        52 : 'cinquante-deux',
        53 : 'cinquante-trois',
        54 : 'cinquante-quatre',
        55 : 'cinquante-cinq',
        56 : 'cinquante-six',
        57 : 'cinquante-sept',
        58 : 'cinquante-huit',
        59 : 'cinquante-neuf',
        60 : 'soixante',
        61 : 'soixante-et-un',
        62 : 'soixante-deux',
        63 : 'soixante-trois',
        64 : 'soixante-quatre',
        65 : 'soixante-cinq',
        66 : 'soixante-six',
        67 : 'soixante-sept',
        68 : 'soixante-huit',
        69 : 'soixante-neuf',
        70 : 'soixante-dix',
        71 : 'soixante-et-onze',
        72 : 'soixante-douze',
        73 : 'soixante-treize',
        74 : 'soixante-quatorze',
        75 : 'soixante-quinze',
        76 : 'soixante-seize',
        77 : 'soixante-dix-sept',
        78 : 'soixante-dix-huit',
        79 : 'soixante-dix-neuf',
        80 : 'quatre-vingt',
        81 : 'quatre-vingt-un'
    }

    // dark mode
    let header = document.getElementById('lien');
    socket.emit('changeBackground');
    socket.on('changeColorBackground', function (checked) {
        if (checked == true) {
            // passer en mode sombre
            header.href = '../css/jeu-dark.css';
        } else {
            // passer en mode clair
            header.href = '../css/jeu.css';
        }
    })


    // récupération et affichage
    socket.emit('valueSearch');
    socket.on('valueReception', function (valueContent) {
        value = (Object.values(niveaux))[valueContent - 1];
        // console.log(value);

        for (let i = 0; i < value; i++) {
            nombreAlea = Math.floor(Math.random() * 81);
            checkDouble(nombreAlea);
        }
        for (let h = 0; h < j; h++) {
            nombreAlea = Math.floor(Math.random() * 81);
            checkDouble(nombreAlea);
        }
        console.log(chiffreAffiche);
    })
    
    function checkDouble(nombreAlea) {
        if (chiffreAffiche.indexOf(nombreAlea) !== -1 && nombreAlea != 0) {
            // console.log('la valeur existe');
            j++;
        } else if (nombreAlea == 0){
            // console.log('il y a un 0');
            j++;
        } else {
            // console.log('la valeur n\'existe pas');
            chiffreAffiche.push(nombreAlea);
            ajoutChiffreGrille(nombreAlea);
        }
    };

    function ajoutChiffreGrille(nombreAlea) {
        let idClass = (Object.values(classe))[nombreAlea];
        let caseRempli = document.getElementById(idClass);
        // console.log(idClass);
        // console.log(caseRempli);
        caseRempli.innerHTML = puzzles[puzzle][nombreAlea];
    }


    // ajout div et p
    gBloc.insertAdjacentHTML("afterbegin", `
    <div class="petit-bloc1">
        <p class="first-line un" id="un"></p>
        <p class="first-line deux" id="deux"></p>
        <p class="first-line trois right-line" id="trois"></p>
        <p class="first-line quatre" id="quatre"></p>
        <p class="first-line cinq" id="cinq"></p>
        <p class="first-line six right-line" id="six"></p>
        <p class="first-line sept" id="sept"></p>
        <p class="first-line huit" id="huit"></p>
        <p class="first-line neuf" id="neuf"></p>
    </div>
    <div class="petit-bloc2">
        <p class="dix" id="dix"></p>
        <p class="onze" id="onze"></p>
        <p class="douze right-line" id="douze"></p>
        <p class="treize" id="treize"></p>
        <p class="quatorze" id="quatorze"></p>
        <p class="quinze right-line" id="quinze"></p>
        <p class="seize" id="seize"></p>
        <p class="dix-sept" id="dix-sept"></p>
        <p class="dix-huit" id="dix-huit"></p>
    </div>
    <div class="petit-bloc3">
        <p class="dix-neuf bottom-line" id="dix-neuf"></p>
        <p class="vingt bottom-line" id="vingt"></p>
        <p class="vingt-et-un right-line bottom-line" id="vingt-et-un"></p>
        <p class="vingt-deux bottom-line" id="vingt-deux"></p>
        <p class="vingt-trois bottom-line" id="vingt-trois"></p>
        <p class="vingt-quatre right-line bottom-line" id="vingt-quatre"></p>
        <p class="vingt-cinq bottom-line" id="vingt-cinq"></p>
        <p class="vingt-six bottom-line" id="vingt-six"></p>
        <p class="vingt-sept bottom-line" id="vingt-sept"></p>
    </div>
    <div class="petit-bloc4">
        <p class="vingt-huit" id="vingt-huit"></p>
        <p class="vingt-neuf" id="vingt-neuf"></p>
        <p class="trente right-line" id="trente"></p>
        <p class="trente-et-un" id="trente-et-un"></p>
        <p class="trente-deux" id="trente-deux"></p>
        <p class="trente-trois right-line" id="trente-trois"></p>
        <p class="trente-quatre" id="trente-quatre"></p>
        <p class="trente-cinq" id="trente-cinq"></p>
        <p class="trente-six" id="trente-six"></p>
    </div>
    <div class="petit-bloc5">
        <p class="trente-sept" id="trente-sept"></p>
        <p class="trente-huit" id="trente-huit"></p>
        <p class="trente-neuf right-line" id="trente-neuf"></p>
        <p class="quarante" id="quarante"></p>
        <p class="quarante-et-un" id="quarante-et-un"></p>
        <p class="quarante-deux right-line" id="quarante-deux"></p>
        <p class="quarante-trois" id="quarante-trois"></p>
        <p class="quarante-quatre" id="quarante-quatre"></p>
        <p class="quarante-cinq" id="quarante-cinq"></p>
    </div>
    <div class="petit-bloc6">
        <p class="quarante-six bottom-line" id="quarante-six"></p>
        <p class="quarante-sept bottom-line" id="quarante-sept"></p>
        <p class="quarante-huit right-line bottom-line" id="quarante-huit"></p>
        <p class="quarante-neuf bottom-line" id="quarante-neuf"></p>
        <p class="cinquante bottom-line" id="cinquante"></p>
        <p class="cinquante-et-un right-line bottom-line" id="cinquante-et-un"></p>
        <p class="cinquante-deux bottom-line" id="cinquante-deux"></p>
        <p class="cinquante-trois bottom-line" id="cinquante-trois"></p>
        <p class="cinquante-quatre bottom-line" id="cinquante-quatre"></p>
    </div>
    <div class="petit-bloc7">
        <p class="cinquante-cinq" id="cinquante-cinq"></p>
        <p class="cinquante-six" id="cinquante-six"></p>
        <p class="cinquante-sept right-line" id="cinquante-sept"></p>
        <p class="cinquante-huit" id="cinquante-huit"></p>
        <p class="cinquante-neuf" id="cinquante-neuf"></p>
        <p class="soixante right-line" id="soixante"></p>
        <p class="soixante-et-un" id="soixante-et-un"></p>
        <p class="soixante-deux" id="soixante-deux"></p>
        <p class="soixante-trois" id="soixante-trois"></p>
    </div>
    <div class="petit-bloc8">
        <p class="soixante-quatre" id="soixante-quatre"></p>
        <p class="soixante-cinq" id="soixante-cinq"></p>
        <p class="soixante-six right-line" id="soixante-six"></p>
        <p class="soixante-sept" id="soixante-sept"></p>
        <p class="soixante-huit" id="soixante-huit"></p>
        <p class="soixante-neuf right-line" id="soixante-neuf"></p>
        <p class="soixante-dix" id="soixante-dix"></p>
        <p class="soixante-et-onze" id="soixante-et-onze"></p>
        <p class="soixante-douze" id="soixante-douze"></p>
    </div>
    <div class="petit-bloc9">
        <p class="last-line soixante-treize" id="soixante-treize"></p>
        <p class="last-line soixante-quatorze" id="soixante-quatorze"></p>
        <p class="last-line soixante-quinze right-line" id="soixante-quinze"></p>
        <p class="last-line soixante-seize" id="soixante-seize"></p>
        <p class="last-line soixante-dix-sept" id="soixante-dix-sept"></p>
        <p class="last-line soixante-dix-huit right-line" id="soixante-dix-huit"></p>
        <p class="last-line soixante-dix-neuf" id="soixante-dix-neuf"></p>
        <p class="last-line quatre-vingt" id="quatre-vingt"></p>
        <p class="last-line quatre-vingt-un" id="quatre-vingt-un"></p>
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
        "741693285568427913329185746153976824294851637687234591836519472472368159915742368",
        "297413568468295713315687492956371284841526937732948156179864325623759841584132679",
        "789426513435817926612935748574361892293784651168259374926548137351672489847193265",
        "351269847784513692692487531425631978963748125178952463847126359519374286236895714",
        "917483256643592817285176349351627984768941532429835671532764198876319425194258763",
        "571493682968172543324568917819346725642785139735219468453627891286951374197834256",
        "654198732197324685328567941589271364432956817761843529845619273973482156216735498",
        "746835219189642753235179864697324185328751496514968372862513947471296538953487621",
        "321589764856347921497216583148793256935462178672851439589624317213978645764135892",
        "826154973745329618193876542569748231284913765317265489632491857478532196951687324"
    ];


    let puzzle = Math.round(Math.random() * 10);
    console.log(puzzle);
    // console.log(puzzles[puzzle][0]);

    // p1.innerHTML = puzzles[puzzle][0];
    // p2.innerHTML = puzzles[puzzle][1];
    // p3.innerHTML = puzzles[puzzle][2];
    // p4.innerHTML = puzzles[puzzle][3];
    // p5.innerHTML = puzzles[puzzle][4];
    // p6.innerHTML = puzzles[puzzle][5];
    // p7.innerHTML = puzzles[puzzle][6];
    // p8.innerHTML = puzzles[puzzle][7];
    // p9.innerHTML = puzzles[puzzle][8];
    // p10.innerHTML = puzzles[puzzle][9];
    // p11.innerHTML = puzzles[puzzle][10];
    // p12.innerHTML = puzzles[puzzle][11];
    // p13.innerHTML = puzzles[puzzle][12];
    // p14.innerHTML = puzzles[puzzle][13];
    // p15.innerHTML = puzzles[puzzle][14];
    // p16.innerHTML = puzzles[puzzle][15];
    // p17.innerHTML = puzzles[puzzle][16];
    // p18.innerHTML = puzzles[puzzle][17];
    // p19.innerHTML = puzzles[puzzle][18];
    // p20.innerHTML = puzzles[puzzle][19];
    // p21.innerHTML = puzzles[puzzle][20];
    // p22.innerHTML = puzzles[puzzle][21];
    // p23.innerHTML = puzzles[puzzle][22];
    // p24.innerHTML = puzzles[puzzle][23];
    // p25.innerHTML = puzzles[puzzle][24];
    // p26.innerHTML = puzzles[puzzle][25];
    // p27.innerHTML = puzzles[puzzle][26];
    // p28.innerHTML = puzzles[puzzle][27];
    // p29.innerHTML = puzzles[puzzle][28];
    // p30.innerHTML = puzzles[puzzle][29];
    // p31.innerHTML = puzzles[puzzle][30];
    // p32.innerHTML = puzzles[puzzle][31];
    // p33.innerHTML = puzzles[puzzle][32];
    // p34.innerHTML = puzzles[puzzle][33];
    // p35.innerHTML = puzzles[puzzle][34];
    // p36.innerHTML = puzzles[puzzle][35];
    // p37.innerHTML = puzzles[puzzle][36];
    // p38.innerHTML = puzzles[puzzle][37];
    // p39.innerHTML = puzzles[puzzle][38];
    // p40.innerHTML = puzzles[puzzle][39];
    // p41.innerHTML = puzzles[puzzle][40];
    // p42.innerHTML = puzzles[puzzle][41];
    // p43.innerHTML = puzzles[puzzle][42];
    // p44.innerHTML = puzzles[puzzle][43];
    // p45.innerHTML = puzzles[puzzle][44];
    // p46.innerHTML = puzzles[puzzle][45];
    // p47.innerHTML = puzzles[puzzle][46];
    // p48.innerHTML = puzzles[puzzle][47];
    // p49.innerHTML = puzzles[puzzle][48];
    // p50.innerHTML = puzzles[puzzle][49];
    // p51.innerHTML = puzzles[puzzle][50];
    // p52.innerHTML = puzzles[puzzle][51];
    // p53.innerHTML = puzzles[puzzle][52];
    // p54.innerHTML = puzzles[puzzle][53];
    // p55.innerHTML = puzzles[puzzle][54];
    // p56.innerHTML = puzzles[puzzle][55];
    // p57.innerHTML = puzzles[puzzle][56];
    // p58.innerHTML = puzzles[puzzle][57];
    // p59.innerHTML = puzzles[puzzle][58];
    // p60.innerHTML = puzzles[puzzle][59];
    // p61.innerHTML = puzzles[puzzle][60];
    // p62.innerHTML = puzzles[puzzle][61];
    // p63.innerHTML = puzzles[puzzle][62];
    // p64.innerHTML = puzzles[puzzle][63];
    // p65.innerHTML = puzzles[puzzle][64];
    // p66.innerHTML = puzzles[puzzle][65];
    // p67.innerHTML = puzzles[puzzle][66];
    // p68.innerHTML = puzzles[puzzle][67];
    // p69.innerHTML = puzzles[puzzle][68];
    // p70.innerHTML = puzzles[puzzle][69];
    // p71.innerHTML = puzzles[puzzle][70];
    // p72.innerHTML = puzzles[puzzle][71];
    // p73.innerHTML = puzzles[puzzle][72];
    // p74.innerHTML = puzzles[puzzle][73];
    // p75.innerHTML = puzzles[puzzle][74];
    // p76.innerHTML = puzzles[puzzle][75];
    // p77.innerHTML = puzzles[puzzle][76];
    // p78.innerHTML = puzzles[puzzle][77];
    // p79.innerHTML = puzzles[puzzle][78];
    // p80.innerHTML = puzzles[puzzle][79];
    // p81.innerHTML = puzzles[puzzle][80];

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