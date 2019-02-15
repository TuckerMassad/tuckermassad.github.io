var colorArray = ['#61892F', '#86c232', '#222629', '#fff', '#686e70'];

var burst = new mojs.Burst({
	speed: -3.4,
	opacity: 0.56,
	y: -26,
	radiusX: { 500: 10 },
	radiusY: { 170: 10 },
	duration: 4000,
	count: 18,
	children: {
		shape: 'polygon',
		points: 8,
		scale: { 'rand(0, 2.8)': 0 },
		fill: colorArray,
		angle: { 'rand(0, 360)': 'rand(0, 360)' },
		duration: 'rand(1000, 7000)',
		delay: 'rand(0, 2000)' },

	onComplete: function onComplete() {
		this.generate().replay();
	} }).

replay();
