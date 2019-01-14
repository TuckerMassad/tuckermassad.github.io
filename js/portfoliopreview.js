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
      { name: "Outfit Helper",
        description: "Daily weather reminder sent via SMS as well as a suggestion of clothes given the current weather conditions.  ",
        imagefile:"./img/outfithelper2.jpg",
        icon: "fab fa-python fa-1x nohover",
        github: "fab fa-github fa-1x",
        link: "https://github.com/TuckerMassad/OutfitHelper"
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
