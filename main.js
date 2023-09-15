const wrap = document.querySelector('.wrap');
const boxs = wrap.querySelectorAll('div');

/*
basic use
gsap.set('.box', { x: -200, opacity: 0 });
wrap.addEventListener('click', () => {
	gsap.fromTo('.box', { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
});
*/

const motionInfo = [
	{ x: 700, opacity: 1, duration: 2 },
	{ x: 700, scale: 1.5, opacity: 1, duration: 0.5 },
	{ x: 700, opacity: 1, rotation: 150, duration: 1.5 },
	{ x: 700, opacity: 1, scale: 0.5, duration: 0.2 },
	{ x: 700, opacity: 1, y: 300, duration: 1.8 },
];

//bg, transform-origin, duration, relativePosition
const tl = gsap.timeline();

wrap.addEventListener('click', () => motionInfo.forEach((data, idx) => tl.to(boxs[idx], data)));
