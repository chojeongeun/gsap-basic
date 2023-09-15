const wrap = document.querySelector('.wrap');

gsap.set('.box', { x: -200, opacity: 0 });

wrap.addEventListener('click', () => {
	gsap.fromTo('.box', { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
});
