const wrap = document.querySelector('.wrap');

/*
basic use

gsap.set('.box', { x: -200, opacity: 0 });

wrap.addEventListener('click', () => {
	gsap.fromTo('.box', { x: -200, opacity: 0 }, { x: 0, opacity: 1 });
});
*/

//bg, transform-origin, duration, relativePosition
wrap.addEventListener('click', () => {
	gsap.to('div', {
		duration: 1,
		x: 700,
		opacity: 1,
		stagger: 0.2, //시간차 발생(delay 대신 gsap만의 기능)
	});
});
//시간차 모션
