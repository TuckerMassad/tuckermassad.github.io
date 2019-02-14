var sety;
var countNum;
var colorArray = ['#61892F', '#86c232', '#222629', '#fff', '#686e70'];

function setup_for_width(mql) {
	if (mql.matches) {
		sety=-224;
		countNum=0;  //Currently have the count go to 0 on small screens. Need to fix this so its lower on iphones.
	} else {
		sety=-24;
		countNum=14;
	}
}

var width_mql = window.matchMedia("(max-width: 960px)");
width_mql.addListener(setup_for_width);
setup_for_width(width_mql);

var burst = new mojs.Burst({

	speed: -3.4,
	opacity: 0.56,
	y: sety,
	radiusX: { 500: 10 },
	radiusY: { 170: 10 },
	duration: 4000,
	count: countNum,
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
