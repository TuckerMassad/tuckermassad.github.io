var sety;
var colorArray = ['#61892F', '#86c232', '#222629', '#fff', '#686e70'];

if (matchMedia) {
	var mq = window.matchMedia("(max-width: 960px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}


var burst = new mojs.Burst({

	speed: -2.4,
	opacity: 0.62,
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


function WidthChange(mq) {

	if (mq.matches) {
		sety =- 224;
	}
	else {
		sety = -26;
	}

}