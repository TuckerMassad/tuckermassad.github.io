function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor(Math.random() * 20 + 1), { y: from }, { y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone });
}

var itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].
forEach(function (e) {return animateWithRandomNumber(e, -1080, 1080);});
var itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].
forEach(function (e) {return animateWithRandomNumber(e, 1080, -1080);});
