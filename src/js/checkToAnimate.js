function checkAndAnimate() {
  const assets = document.querySelectorAll('.assets__description');

  if (window.innerWidth < 576) {
    assets.forEach(element => {
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top;
      const triggerHeight = 800;

      if (elementTop <= triggerHeight) {
        element.classList.add('animate__bounceInRight');
      }
    });
  }
}

function onPageLoad() {
  if (window.innerWidth >= 576) {
    const assets = document.querySelectorAll('.assets__description');

    assets.forEach(element => {
      element.classList.add('animate__bounceInRight');
    });
  }
}

if (window.innerWidth < 576) {
  window.addEventListener('scroll', checkAndAnimate);
}

document.addEventListener('DOMContentLoaded', onPageLoad);
