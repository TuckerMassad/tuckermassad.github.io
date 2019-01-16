var app = new Vue({
  el: '#app',
  data: {
    projects: [
      { name: "Mersenne Twister",
        description: "Pseudo-Random Number Generator implemented in Python including a basic password cracker.  ",
        imagefile:"./img/numbersportfolio2.jpg",
        icon: "fab fa-python fa-1x nohover",
        github: "fab fa-github fa-1x",
        link: "https://github.com/TuckerMassad/MersenneTwister"
      },
      { name: "TGS : One-Page Website Design",
        description: "An elegant one-page website built using jquery & bootstrap for Union College's (my alma mater) student alumni association, The Garnet Society",
        imagefile:"./img/tgs.png",
        icon: "fab fa-html5 fa-1x nohover",
        github: "fab fa-codepen fa-1x",
        link: "https://codepen.io/tuckermassad/full/NeJvjP"
      },
      { name: "Set Game",
        description: "Real-time card game of Set implemented in Java.  ",
        imagefile:"./img/setgame.jpg",
        icon: "fab fa-java fa-1x nohover",
        github: "fab fa-github fa-1x",
        link: "https://github.com/TuckerMassad/SetGame"
      }
    ],
  },
})
