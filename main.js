const [current, imgs, opacity] = [document.querySelector('#current'), document.querySelectorAll('.imgs img'), 0.6];

// set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // change current img to src of clicked img
  current.src = e.target.src;

  // add fadeIn class
  current.classList.add('fade-in');

  // remove fade-in class after 0.5s
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // change the opacity to opacity of var
  e.target.style.opacity = opacity;
}
