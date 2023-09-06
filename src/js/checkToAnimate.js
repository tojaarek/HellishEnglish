function checkAndAnimate() {
  const assets = document.querySelectorAll('.assets__description');

  assets.forEach(element => {
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top;
    const triggerHeight = 800;

    if (elementTop <= triggerHeight) {
      element.classList.add('animate__bounceInRight');
    }
  });
}

if (window.innerWidth <= 450) {
  checkAndAnimate();
  window.addEventListener('scroll', checkAndAnimate);
}
