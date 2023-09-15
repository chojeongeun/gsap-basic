const wrap = document.querySelector('.wrap');

/*
basic use

gsap.set('.box', { x: -200, opacity: 0 });

wrap.addEventListener('click', () => {
	gsap.fromTo('.box', { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
});
*/

//bg, transform-origin, duration, relativePosition
const tl = gsap.timeline();
wrap.addEventListener('click', () => {
	tl.to('.box', { x: 700, opacity: 1, duration: 2 });
	tl.to('.box2', { x: 700, scale: 1.5, opacity: 1, duration: 0.5 });
	tl.to('.box3', { x: 700, rotation: 150, opacity: 1, duration: 1.5 });
	tl.to('.box4', { x: 700, scale: 0.5, opacity: 1, duration: 2 });
	tl.to('.box5', { x: 700, y: 300, opacity: 1, duration: 0.3 });
});
//무조건 이전꺼가 끝나야 다음꺼가 동기화돼서 처리됨
