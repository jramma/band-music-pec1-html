window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

window.toggleMenu = function () {
  var menu = document.getElementById("mobile-menu");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};

const canvasAnimation = document.getElementById("audio");
if (canvasAnimation) {
  window.onload = function () {
    var audio = document.getElementById("audio");
    audio.volume = 0.1;
    var isPlaying = false;

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, WIDTH, HEIGHT); // Limpia el canvas en lugar de rellenarlo con un color

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        var r = barHeight + 25 * (i / bufferLength);
        var g = 250 * (i / bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(255,165,0)";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    document.getElementById("title").addEventListener("click", function () {
      if (isPlaying) {
        audio.pause();
        isPlaying = false;
      } else {
        audio.play();
        renderFrame();
        isPlaying = true;
      }
    });
  };
}

const contentDiv = document.querySelector(".scroll-vertical");
if (contentDiv) {
  let scrollInterval = setInterval(function () {
    if (
      contentDiv.scrollTop <
      contentDiv.scrollHeight - contentDiv.clientHeight
    ) {
      contentDiv.scrollTop += 2; // Ajusta este valor para controlar la velocidad del scroll
    } else {
      clearInterval(scrollInterval); // Detiene el scroll cuando se llega al final
    }
  }, 50);
}

const links_naranjas = document.getElementById("links_naranjas");
if (links_naranjas) {
  links_naranjas.addEventListener("scroll", function () {
    var middle = window.innerHeight / 2;
    var elements = document.querySelectorAll("li");

    elements.forEach(function (element) {
      var rect = element.getBoundingClientRect();

      if (rect.top <= middle && rect.bottom >= middle) {
        element.style.color = "#fca41e";
      } else {
        element.style.color = "white";
      }
    });
  });
}

const iSswiper = document.querySelector(".mySwiper");
if (iSswiper) {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "cards",
    grabCursor: true,
    autoplay: {
      // aumentar para que vaya más lento
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });
}
const nav = document.getElementById("nav");
if (nav) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100; // Ajusta el valor según tus necesidades

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
  });
}