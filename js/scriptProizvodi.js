/************************/
/****** NAV VERT HIDE ******/
/************************/

window.addEventListener('load', function hideNavVert() {
  
  const navVert = document.querySelector('.nav-vert');
  if(window.innerWidth < 1001) {
    // navVert.classList.add('hide');
    navVert.style.display='none';
  } else {
    // navVert.classList.remove('hide');
    navVert.style.display='inline-block';
  }
})

window.addEventListener('resize', function hideNavVert() {
  
  const navVert = document.querySelector('.nav-vert');
  if(window.innerWidth < 1001) {
    // navVert.classList.add('hide');
    navVert.style.display='none';
  } else {
    // navVert.classList.remove('hide');
    navVert.style.display='inline-block';
  }
})
    
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

  let checkbox = document.querySelector('.navbar-checkbox');

  checkbox.checked = false;

}