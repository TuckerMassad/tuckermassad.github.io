var sety;
var colorArray = ['#61892F', '#86c232', '#222629', '#fff', '#686e70'];
var mq =  window.matchMedia( "(min-width: 480px)" );

if (mq.matches) {
	sety = -24;
}
else {
	sety = -224;
}

var burst = new mojs.Burst({

	speed: -2,
	opacity: 0.62,
	y: sety,
	radiusX: { 900: 10 },
	radiusY: { 170: 10 },
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