var div = document.getElementById("bubblewrapperabove");
var rect = div.getBoundingClientRect();
var bubbleorigin = rect.bottom-80;

var countAmount;

const mq = window.matchMedia( "(min-width: 1280px)" );

if (mq.matches) {
	countAmount=10;
} else {
	countAmount=0;
}

var colorArray = ['#61892F', '#86c232', '#222629', '#fff', '#686e70'];

var burst = new mojs.Burst({
	speed: -16.4,
	zIndex: -999,
	opacity: 0.42,
	y: bubbleorigin,
	radiusX: { 260: 10 },
	radiusY: { 20: 10 },
	duration: 4000,
	count: 0,
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


