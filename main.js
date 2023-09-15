gsap.from('.box', {
	duration: 2,
	x: 500,
	backgroundColor: '#00ffff',

	//scrollTrigger 위치값을 따로 지정하지 않으면
	//기본적으로 trigger로 지정한 요소가 viewport에 들어오기만 하면 바로 실행됨
	scrollTrigger: {
		trigger: '.box',
		markers: true,
		start: 'top 50%', //해당 요소의 모션이 시작될 viewport상의 세로위치 지정
		end: 'top 10%', //해당 요소의 모션 적용이 해제될 viewport상의 세로위치 지정
		toggleActions: 'restart pause reverse reset', //영역진입, 영역떠남, 재영역진입, 재영역떠남
		//play: 모션시작
		//pause: 모션일시정지
		//resume: 모션이어서 실행
		//restart: 모션 다시 처음부터 시작
		//complete: 무조건 마지막 위치로 모션강제 종료
		//reverse: 다시 역으로 모션 재생
		//none: 모션기능 해제
	},
});
