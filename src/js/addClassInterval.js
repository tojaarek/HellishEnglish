function addClassInterval(className, duration) {
  const points = document.querySelector('.hero__description--orange');
  points.classList.add(className);

  setTimeout(() => {
    points.classList.remove(className);
  }, duration);
}

setInterval(() => {
  addClassInterval('animate__heartBeat', 1000);
}, 2000);
