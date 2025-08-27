let sidemenuShown = false;

document.querySelector('.btn-menu').addEventListener('click', e => {
  document.querySelector('.sidemenu').style.display = !sidemenuShown ? 'block' : 'none';
  sidemenuShown = !sidemenuShown;
})