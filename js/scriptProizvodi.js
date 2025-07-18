/************************/
/****** NAV VERT HIDE ******/
/************************/

window.addEventListener('load', function() {
  
  const navVert = document.querySelector('.nav-vert');
  if(window.innerWidth < 1001) {
    navVert.style.display='none';
  } else {
    navVert.style.display='inline-block';
  }
})

window.addEventListener('resize', function() {
  
  const navVert = document.querySelector('.nav-vert');
  if(window.innerWidth < 1001) {
    navVert.style.display='none';
  } else {
    navVert.style.display='inline-block';
  }
})
    
/************************/
/****** OKOV PROIZVODI ******/
/************************/
  

function submenuShow() {
  let okovSub = document.querySelector('.okov-submenu');
  
  if(okovSub.style.visibility='collapse') {
    okovSub.classList.toggle('show');
    okovSub.style.transition='0.4s';
  }
}

function submenuProizvodiShow() {

  let submenu_proizvodi = document.querySelector('.proizvodi-submenu-nohover');
  let menu_kontakt = document.querySelector('.menu_kontakt-nohover');

  if (submenu_proizvodi.style.visibility='collapse') {
    submenu_proizvodi.classList.toggle('show-proizvodi-submenu-nohover');
    menu_kontakt.classList.toggle('moveDown-menu_kontakt')
  }
}



function closeNavbar() {

  let checkbox = document.querySelector('.navbar-checkbox');

  checkbox.checked = false;

}


/************************/
/****** BOJE I LAKOVI POPUP ******/
/************************/

const proizvodiImg = document.querySelectorAll('.proizvodi-content img');
let imgSrc = '';


proizvodiImg.forEach(function(img) {
  img.addEventListener('click', function(e) {
    imgSrc = e.target.src;
    const popupImg = document.querySelector('.popup-img');
    popupImg.setAttribute('src', imgSrc);
    const popupTxt = document.querySelector('.popup-text');
    const popupTxtCnt = e.target.alt;
    popupTxt.textContent = popupTxtCnt;

    let popupCnt = document.querySelector('.popup-content');

    switch(this.getAttribute('src')) {
      case 'img/boje/sintex uljana boja za drvo i metal irkom.png':
      case 'img/boje/temeljna boja za metal irkom.png':
      case 'img/boje/pyrostal vatrostalna boja za metal irkom.png':
      case 'img/boje/radijator lak irkom.png':
      case 'img/boje/antique zast premaz na koroziju irkom.png':
        popupCnt.style.backgroundImage='linear-gradient(to bottom, #e4ba00, #e41a2200)';
        break;
      case 'img/boje/nitro emajl za drvo i metal irkom.png':
      case 'img/boje/nitro temeljna boja za metal irkom.png':
      case 'img/boje/rapid brzosusiva antikorozivna boja za metal irkom.png':
        popupCnt.style.backgroundImage='linear-gradient(to bottom, #d6171e, #e41a2200)';
        break;
      case 'img/boje/boja za metal 3u1 irkom.png':
        popupCnt.style.backgroundImage='linear-gradient(to bottom, #636363, #e41a2200)';
        break;
      case 'img/boje/mehano autoreparatur irkom.png':
        popupCnt.style.backgroundImage='linear-gradient(to bottom, #da7600, #e41a2200)';
        break;
      case 'img/boje/aqualin boja za radijatore na vodenoj bazi irkom.png':
      case 'img/boje/aqualin vodeni emajl za drvo i metal irkom.png':
        popupCnt.style.backgroundImage='linear-gradient(to bottom, #0093d0, #e41a2200)';
        break;
      case 'img/boje/irkolin gold irkom.png':
      case 'img/boje/irkolin classic irkom.png':
        popupCnt.style.backgroundImage='linear-gradient(to bottom, #ba7833,rgba(255, 255, 255, 0))';
        break;
      default:
        popupCnt.style.backgroundImage='none';
    }
  })
})


/****** TON KARTA ******/

let btn3u1 = document.querySelectorAll('#boje-text-span-3u1');
let btnTemeljna = document.querySelectorAll('#boje-text-span-temeljna');
let btnEmajl = document.querySelectorAll('#boje-text-span-emajl');
let btnSintex = document.querySelectorAll('#boje-text-span-sintex');
let btnRapid = document.querySelectorAll('#boje-text-span-rapid');
let btnPyrostal = document.querySelectorAll('#boje-text-span-pyrostal');
let btnMehano = document.querySelectorAll('#boje-text-span-mehano');
let btnAqualinEmajl = document.querySelectorAll('#boje-text-span-aqualin-emajl');
let btnAntique = document.querySelectorAll('#boje-text-span-antique');
let btnLazura = document.querySelectorAll('#boje-text-span-lazura');

let tonKarta3u1 = document.querySelector('#ton-karta-container-3u1');
let tonKartaTemeljna = document.querySelector('#ton-karta-container-temeljna');
let tonKartaEmajl = document.querySelector('#ton-karta-container-nitro-emajl');
let tonKartaSintex = document.querySelector('#ton-karta-container-sintex');
let tonKartaRapid = document.querySelector('#ton-karta-container-rapid');
let tonKartaPyrostal = document.querySelector('#ton-karta-container-pyrostal');
let tonKartaMehano = document.querySelector('#ton-karta-container-mehano');
let tonKartaAqualinEmajl = document.querySelector('#ton-karta-container-aqualin-emajl');
let tonKartaAntique = document.querySelector('#ton-karta-container-antique');
let tonKartaLazura = document.querySelector('#ton-karta-container-lazura');

let closebtn = document.querySelector('#close-btn');
let popupContent = document.querySelector('#popup-ton-karta .popup-content');

closebtn.addEventListener('click', function() {
  popupContent.lastElementChild.remove;
  popupContent.lastElementChild.classList.remove('showTK');
})


btn3u1.forEach(function(btn) {
  btn.addEventListener('click', function() {
    popupContent.appendChild(tonKarta3u1);
    tonKarta3u1.classList.add('showTK');
  })
})

btnTemeljna.forEach(function(btn) {
  btn.addEventListener('click', function() {
    popupContent.appendChild(tonKartaTemeljna);
    tonKartaTemeljna.classList.add('showTK');
  })
})

btnEmajl.forEach(function(btn) {
  btn.addEventListener('click', function() {
    popupContent.appendChild(tonKartaEmajl);
    tonKartaEmajl.classList.add('showTK');
  })
})

btnSintex.forEach(function(btn) {
  btn.addEventListener('click', function() {
    popupContent.appendChild(tonKartaSintex);
    tonKartaSintex.classList.add('showTK');
  })
})

btnRapid.forEach(function(btn) {
btn.addEventListener('click', function() {
  popupContent.appendChild(tonKartaRapid);
  tonKartaRapid.classList.add('showTK');
})
})

btnPyrostal.forEach(function(btn) {
btn.addEventListener('click', function() {
  popupContent.appendChild(tonKartaPyrostal);
  tonKartaPyrostal.classList.add('showTK');
})
})

btnMehano.forEach(function(btn) {
btn.addEventListener('click', function() {
  popupContent.appendChild(tonKartaMehano);
  tonKartaMehano.classList.add('showTK');
})
})

btnAqualinEmajl.forEach(function(btn) {
  btn.addEventListener('click', function() {
    popupContent.appendChild(tonKartaAqualinEmajl);
    tonKartaAqualinEmajl.classList.add('showTK');
  })
})

btnAntique.forEach(function(btn) {
  btn.addEventListener('click', function() {
    popupContent.appendChild(tonKartaAntique);
    tonKartaAntique.classList.add('showTK');
  })
})

btnLazura.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const artTxt = btn.parentElement;
    const TKtext = document.querySelector('#ton-karta-container-lazura h3');

      if(artTxt.textContent.includes("GOLD")) {
        popupContent.appendChild(tonKartaLazura);
        tonKartaLazura.classList.add('showTK');
        TKtext.textContent = "Irkolin Gold ton karta";
      } 
      else if (artTxt.textContent.includes("CLASSIC")) {
        popupContent.appendChild(tonKartaLazura);
        tonKartaLazura.classList.add('showTK');
        TKtext.textContent = "Irkolin Classic ton karta";
    }
  })
})