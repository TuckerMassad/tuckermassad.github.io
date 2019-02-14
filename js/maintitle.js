var colorArray = ['#61892F', '#86c232', '#222629', '#fff', '#686e70'];

var mq = window.matchMedia( "(min-width: 360px)" ) || window.matchMedia( "(min-width: 480px)" );
var sety = 0;

if (mq.matches) {
	sety = -224;
}
else {
	sety = -24;
}

var burst = new mojs.Burst({

	speed: -6,
	opacity: 0.58,
	y: sety,
	radiusX: { 800: 10 },
	radiusY: { 160: 10 },
	duration: 4000,
	count: 16,
	children: {
		shape: 'polygon',
		points: 10,
		scale: { 'rand(0, 3)': 0 },
		fill: colorArray,
		angle: { 'rand(0, 360)': 'rand(0, 360)' },
		duration: 'rand(1000, 7000)',
		delay: 'rand(0, 2000)' },
		speed: 0.2,

	onComplete: function onComplete() {
		this.generate().replay();
	} }).

replay();