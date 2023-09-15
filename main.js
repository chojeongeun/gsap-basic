let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '#sec2',
		start: 'top 50%',
		end: 'top 0%',
		markers: true,
		// toggleActions: 'restart pause reverse reset',
		scrub: 1, //스크롤값과 연동되게 해줌 1:살짝 밀리는 효과 (숫자 클수록)
	},
});

tl.to('.box', {
	scale: 3,
	opacity: 0,
	rotation: 360,
});
