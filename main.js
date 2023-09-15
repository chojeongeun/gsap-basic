let split = new SplitText('h1'); //h1 글자 한개씩 분리
console.log(split);

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '#sec2',
		start: 'top 50%',
		end: 'top 0%',
		markers: true,
		toggleActions: 'restart pause reverse reset',
	},
});

tl.from(split.chars, { scale: 2, opacity: 0, stagger: 0.1 });
//내려보면 동기화 안되어있어서 이미 동작 끝나있음
tl.from('button', { x: 500, opacity: 0 });
