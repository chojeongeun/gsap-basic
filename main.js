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
	//	gsap.to('.box', { rotation: 360, backgroundColor: '#ffff00', duration: 2, transformOrigin: '100% 100%' });
	// 누적시키면서 이동 가능
	gsap.to('.box', { x: 500 });
	gsap.to('.box2', { x: 500, delay: 0 });
	gsap.to('.box3', { x: 500, repeat: 5, yoyo: true, ease: 'bounce-out' }); //왔다갔다 반복
});
