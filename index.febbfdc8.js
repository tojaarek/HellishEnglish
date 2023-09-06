function checkAndAnimate(){document.querySelectorAll(".assets__description").forEach((n=>{n.getBoundingClientRect().top<=800&&n.classList.add("animate__bounceInRight")}))}window.innerWidth<=450&&(checkAndAnimate(),window.addEventListener("scroll",checkAndAnimate));
//# sourceMappingURL=index.febbfdc8.js.map
