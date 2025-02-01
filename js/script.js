/************************/
/****** NAV SCROLL ******/
/************************/

const nav = document.getElementById("nav");
const logo = document.querySelector(".nav-logo");
const navbar = document.querySelectorAll(".navbar");
const fastore = document.querySelectorAll(".fa-store");

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;
  if(currentScrollPos >= 700 & screen.width>=600) {
    nav.classList.add('sticky');
    nav.style.transition="0.4s";
  } else {
    nav.classList.remove('sticky');
  }
})


/************************/
/****** SWIPER HEADER ******/
/************************/


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // autoplayPause,
    // effect: 'cube',
    keyboard: {
      enabled: 'true'
    },
    centeredSlides: true,
    autoplay: {
        delay: 100000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
  });


/************************/
/****** VIDEO PLAYER ******/
/************************/

const myVideo = document.getElementById("myvideo");

function playPause() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}


/************************/
/****** OKOV PROIZVODI ******/
/************************/
  

  function submenuShow() {
  let okovSub = document.querySelector('.okov-submenu');
  let okovLi = document.querySelectorAll('.okov-submenu-li');
  
  if(okovSub.style.visibility='collapse') {
    okovSub.classList.toggle('show');
    okovSub.style.transition='0.4s';
  } 
  else {
    okovLi.classList.toggle('hide');
    okovSub.classList.toggle('hide');
  }
}


function submenuProizvodiShow() {

  let submenu_proizvodi = document.querySelector('.proizvodi-submenu-nohover');
  let menu_kontakt = document.querySelector('.menu_kontakt-nohover');

  if (submenu_proizvodi.style.visibility='collapse') {
    submenu_proizvodi.classList.toggle('show-proizvodi-submenu-nohover');
    menu_kontakt.classList.toggle('moveDown-menu_kontakt')
  }
  else {
    // submenu_proizvodi.style.display='none';
    submenu_proizvodi.classList.toggle('hide-proizvodi-submenu-nohover');
    menu_kontakt.classList.toggle('moveUp-menu_kontakt');
  }
}

function closeNavbar() {

  let navbar = document.querySelector('.navbar-nohover');
  let checkbox = document.querySelector('.navbar-checkbox');

  if (checkbox.checked = false) {
  navbar.classList.toggle('navbar-nohover-show');
  checkbox.setAttribute('checked',false);
  } else {
    navbar.classList.toggle('navbar-nohover-hide');
    checkbox.setAttribute('checked',true);
  }

}

