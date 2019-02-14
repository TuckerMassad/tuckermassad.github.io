var sety;
var colorArray = ['#61892F', '#86c232', '#222629', '#fff', '#686e70'];

if (matchMedia) {
	var mq = window.matchMedia("(min-width: 320px) and (max-width: 480px)");
	var mqi = window.matchMedia("(min-width: 480px) and (max-width: 900px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

function WidthChange(mq) {

	if (mq.matches || mqi.matches) {
		sety =- 224;
	}
	else {
		sety = -26;
	}

}

var burst = new mojs.Burst({

	speed: -3.4,
	opacity: 0.56,
	y: sety,
	radiusX: { 500: 10 },
	radiusY: { 170: 10 },
	duration: 4000,
	count: 16,
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
