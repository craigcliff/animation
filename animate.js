var lineDrawing = anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1400,
  delay: function(el, i) { return i * 250 },
  direction: 'forwards',
  loop: false,
	complete: function(anim) {
    $('.container').addClass('completed');

  }
});


/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


particlesJS("dust", {
  "particles": {
    "number": {
      "value": 1000,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": true
      },
      "resize": false
    }
  },
  "retina_detect": true
});


var menuTimeLine = anime.timeline({
  targets: ['.menu'],


  scale: 30,

//  easing: 'easeOutElastic',
autoplay: false,




});

menuTimeLine.add({
    targets: '.menu-close',
    opacity: 10,



    top: '200px'

  });

menuTimeLine.add({
    targets: '.menu-content',
    opacity: 10,


    easing: 'easeOutQuint',


    complete: function(menuTimeLine) {
        console.log(menuTimeLine.completed);
      }

  });


///// menu close

var menuClose = anime.timeline({


  targets: '.menu-content',
  opacity: 0,


  easing: 'easeOutQuint'

});

menuClose.add({
  targets: ['.menu'],


  scale: 1,

  easing: 'easeOutElastic',
  autoplay: false




  });

menuClose.add({
  targets: '.menu-close',
  opacity: 0,



  top: '800px'


  });




document.querySelector('.menu').onclick =
  menuTimeLine.restart;

 //menuTimeLine.reverse();


document.querySelector('.menu-close').onclick =
    menuClose.restart;

 //menuTimeLine.reverse();
