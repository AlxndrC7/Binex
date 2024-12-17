/************************/
/****** NAV SCROLL ******/
/************************/

const nav = document.getElementById("nav");
const logo = document.querySelector(".nav-logo");
const navbar = document.querySelectorAll(".navbar");
const fastore = document.querySelectorAll(".fa-store");

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;
  if(currentScrollPos >= 700) {
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
        delay: 70000,
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
/****** PROIZVODI ARTICLE ******/
/************************/

// function MetalurgijaFn() {
//   let img = document.createElement('img');
//   img.src = "img/pexels-shockphoto-1381938.jpg";
//   img.style.width="300px", height="300px";
//   document.querySelector(".art1").appendChild(img);
// }

/************************/
/****** OKOV PROIZVODI ******/
/************************/
  

  function submenuShow() {
  let okovSub = document.querySelector('.okov-submenu');
  let okovLi = document.querySelectorAll('.okov-submenu-li')
  if(okovSub.style.visibility='collapse') {
    okovSub.classList.toggle('show');
    okovSub.style.transition='0.4s';
  } else {
    okovLi.classList.toggle('hide');
    okovSub.classList.toggle('hide');
  }
}
