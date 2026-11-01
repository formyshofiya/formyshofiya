/* =========================================
   FOR SHOFIYA ♡
   PREMIUM APOLOGY EXPERIENCE
========================================= */


/* ================= LOADER ================= */

window.addEventListener("load",()=>{

  setTimeout(()=>{
    document.getElementById("loader").classList.add("hide");
  },1200);

});


/* ================= LOVE LETTER ================= */

const loveLetter = `Shofiya, ❤️

I don't know whether these words can explain
everything that's in my heart...

But I still wanted to try.

I'm genuinely sorry.

I'm sorry for the misunderstanding,
for the things that hurt you,
for the moments where I couldn't understand
what you were feeling.

Maybe I didn't explain myself properly.
Maybe I reacted when I should have listened.
Maybe somewhere between what I meant
and what you understood,
things became painful.

And I'm sorry for that.

I never wanted you to feel unimportant.
I never wanted you to feel unheard.
And I never wanted a misunderstanding
to become bigger than the respect I have for you.

I don't want to fight with you.

I don't want to prove that I'm right.
I don't want my ego to win.

I'd rather understand you.

I want to know what hurt you.
I want to hear your side.
I want to explain mine calmly.
And I want us to communicate
instead of assuming the worst.

I'm not asking you to forget everything.
I'm not asking you to suddenly be okay.

Take your time.

Feel whatever you need to feel.

I just wanted you to know
that behind all the words,
there is a person who genuinely regrets
hurting someone who means so much to him.

I can't change what already happened.

But I can learn from it.

I can listen better.
I can communicate better.
I can be more patient.
And I can think before reacting.

Shofiya...

I'm truly, genuinely sorry. ❤️

Whatever you decide,
I will respect your feelings.

With all my heart.`;



/* ================= NAVIGATION ================= */

const pages = document.querySelectorAll(".page");
const progressBar = document.getElementById("progressBar");

const pageOrder = [
  "intro",
  "letter",
  "apology",
  "understanding",
  "memories",
  "journey",
  "promise",
  "final",
  "ending"
];

let currentPage = 0;

function updateProgress(id){

  const index = pageOrder.indexOf(id);

  if(index >= 0){

    currentPage = index;

    const percentage =
      (index / (pageOrder.length - 1)) * 100;

    progressBar.style.width =
      percentage + "%";
  }
}


function showPage(id){

  pages.forEach(page=>{
    page.classList.remove("active");
  });

  const next =
    document.getElementById(id);

  if(!next)return;

  next.classList.add("active");

  updateProgress(id);

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

  if(id==="apology"){
    startTyping();
  }

  if(id==="journey"){
    updateCounter();
  }

  if(id==="memories"){
    createPetals(12);
  }

  if(id==="ending"){
    createPetals(35);
  }
}


document.querySelectorAll("[data-next]")
.forEach(button=>{

  button.addEventListener("click",()=>{

    showPage(
      button.dataset.next
    );

  });

});


/* ================= ENVELOPE ================= */

const envelope =
  document.getElementById("envelope");

const readLetter =
  document.getElementById("readLetter");

const envelopeHint =
  document.getElementById("envelopeHint");

let envelopeOpened = false;

envelope.addEventListener("click",()=>{

  if(envelopeOpened)return;

  envelopeOpened = true;

  envelope.classList.add("open");

  envelopeHint.textContent =
    "A little piece of my heart... 🤍";

  setTimeout(()=>{

    readLetter.classList.remove("hidden");

  },1300);

});


readLetter.addEventListener("click",()=>{

  showPage("apology");

});


/* ================= TYPING ================= */

const typedLetter =
  document.getElementById("typedLetter");

let typingStarted = false;
let charIndex = 0;

function startTyping(){

  if(typingStarted)return;

  typingStarted = true;

  function type(){

    if(charIndex < loveLetter.length){

      typedLetter.textContent +=
        loveLetter.charAt(charIndex);

      charIndex++;

      setTimeout(
        type,
        22
      );
    }

  }

  type();

}


/* ================= COUNTER ================= */

const relationshipStart =
  new Date(
    2024,
    8,
    12,
    0,
    0,
    0
  );


function updateCounter(){

  const now = new Date();

  const difference =
    now - relationshipStart;

  if(difference < 0)return;

  const totalSeconds =
    Math.floor(
      difference / 1000
    );

  const days =
    Math.floor(
      totalSeconds / 86400
    );

  const hours =
    Math.floor(
      (totalSeconds % 86400) / 3600
    );

  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );

  const seconds =
    totalSeconds % 60;


  document.getElementById("days")
    .textContent = days;

  document.getElementById("hours")
    .textContent =
      String(hours).padStart(2,"0");

  document.getElementById("minutes")
    .textContent =
      String(minutes).padStart(2,"0");

  document.getElementById("seconds")
    .textContent =
      String(seconds).padStart(2,"0");

}

updateCounter();

setInterval(
  updateCounter,
  1000
);


/* ================= MUSIC ================= */

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");

const musicLabel =
  document.getElementById("musicLabel");

let musicPlaying = false;


musicBtn.addEventListener("click",async()=>{

  try{

    if(!musicPlaying){

      await music.play();

      musicPlaying = true;

      musicLabel.textContent =
        "Music On";

      musicBtn.classList.add(
        "playing"
      );

    }else{

      music.pause();

      musicPlaying = false;

      musicLabel.textContent =
        "Music";

      musicBtn.classList.remove(
        "playing"
      );

    }

  }catch(error){

    musicLabel.textContent =
      "Add music.mp3";

  }

});


/* ================= UNIVERSE ================= */

const canvas =
  document.getElementById("universe");

const ctx =
  canvas.getContext("2d");

let stars = [];
let shootingStars = [];


function resizeCanvas(){

  const dpr =
    Math.min(
      window.devicePixelRatio || 1,
      2
    );

  canvas.width =
    innerWidth * dpr;

  canvas.height =
    innerHeight * dpr;

  canvas.style.width =
    innerWidth + "px";

  canvas.style.height =
    innerHeight + "px";

  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );


  stars =
    Array.from(
      {length:190},
      ()=>({

        x:
          Math.random() *
          innerWidth,

        y:
          Math.random() *
          innerHeight,

        radius:
          Math.random() *
          1.5 + .2,

        alpha:
          Math.random() * 6,

        speed:
          Math.random() *
          .018 + .003

      })
    );

}


window.addEventListener(
  "resize",
  resizeCanvas
);

resizeCanvas();


function drawUniverse(){

  ctx.clearRect(
    0,
    0,
    innerWidth,
    innerHeight
  );


  stars.forEach(star=>{

    star.alpha +=
      star.speed;

    const opacity =
      .18 +
      Math.abs(
        Math.sin(star.alpha)
      ) * .82;

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,220,240,${opacity})`;

    ctx.fill();

  });


  shootingStars.forEach(
    (star,index)=>{

      star.x += star.vx;
      star.y += star.vy;

      star.life--;

      ctx.beginPath();

      ctx.moveTo(
        star.x,
        star.y
      );

      ctx.lineTo(
        star.x - star.vx * 9,
        star.y - star.vy * 9
      );

      ctx.strokeStyle =
        `rgba(255,170,215,${star.life / 55})`;

      ctx.lineWidth = 1.5;

      ctx.stroke();


      if(star.life <= 0){

        shootingStars.splice(
          index,
          1
        );

      }

    }
  );


  requestAnimationFrame(
    drawUniverse
  );

}

drawUniverse();


function createShootingStar(){

  shootingStars.push({

    x:
      Math.random() *
      innerWidth,

    y:
      Math.random() *
      innerHeight * .45,

    vx:
      5 +
      Math.random() * 6,

    vy:
      2 +
      Math.random() * 4,

    life:55

  });

}


setInterval(
  createShootingStar,
  2800
);


/* ================= FLOATING PARTICLES ================= */

const particles =
  document.getElementById("particles");

function createPetals(amount=1){

  const symbols = [
    "♡",
    "♥",
    "❤️",
    "💗",
    "🌹",
    "✨",
    "🤍",
    "💕"
  ];


  for(let i=0;i<amount;i++){

    const petal =
      document.createElement("div");

    petal.className =
      "petal";

    petal.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    petal.style.left =
      Math.random() * 100 +
      "vw";

    petal.style.fontSize =
      12 +
      Math.random() * 20 +
      "px";

    petal.style.animationDuration =
      6 +
      Math.random() * 7 +
      "s";

    petal.style.setProperty(
      "--drift",
      Math.random() * 220 - 110 +
      "px"
    );


    particles.appendChild(
      petal
    );


    setTimeout(
      ()=>petal.remove(),
      14000
    );

  }

}


setInterval(
  ()=>createPetals(2),
  1200
);


/* ================= FINAL RESPONSE ================= */

const talkBtn =
  document.getElementById("talkBtn");

const spaceBtn =
  document.getElementById("spaceBtn");

const finalResponse =
  document.getElementById(
    "finalResponse"
  );


talkBtn.addEventListener(
  "click",
  ()=>{

    showPage("ending");

    grandCelebration();

    if(!musicPlaying){

      music.play()
      .then(()=>{

        musicPlaying = true;

        musicLabel.textContent =
          "Music On";

        musicBtn.classList.add(
          "playing"
        );

      })
      .catch(()=>{});

    }

  }
);


spaceBtn.addEventListener(
  "click",
  ()=>{

    finalResponse.textContent =
      "I understand. Take all the time you need. I'll respect your space. 🤍";

    spaceBtn.textContent =
      "I Understand 🤍";

    talkBtn.textContent =
      "Whenever You're Ready";

  }
);


/* ================= CELEBRATION ================= */

function grandCelebration(){

  const emojis = [
    "❤️",
    "💖",
    "💕",
    "💗",
    "🤍",
    "🌹",
    "✨",
    "💐",
    "🦋",
    "♡"
  ];


  for(let i=0;i<100;i++){

    setTimeout(()=>{

      const particle =
        document.createElement("div");

      particle.className =
        "spark";

      particle.textContent =
        emojis[
          Math.floor(
            Math.random() *
            emojis.length
          )
        ];


      particle.style.left =
        Math.random() * 100 +
        "vw";

      particle.style.top =
        20 +
        Math.random() * 60 +
        "vh";


      particle.style.setProperty(
        "--x",
        Math.random() * 600 - 300 +
        "px"
      );

      particle.style.setProperty(
        "--y",
        Math.random() * 700 - 350 +
        "px"
      );


      particle.style.fontSize =
        18 +
        Math.random() * 28 +
        "px";


      particles.appendChild(
        particle
      );


      setTimeout(
        ()=>particle.remove(),
        3000
      );

    },i * 28);

  }


  createPetals(50);

  setTimeout(
    ()=>createPetals(40),
    1500
  );

  setTimeout(
    ()=>createPetals(40),
    3000
  );

}


/* ================= REPLAY ================= */

document
  .getElementById("replayBtn")
  .addEventListener(
    "click",
    ()=>{

      envelopeOpened = false;

      typingStarted = false;

      charIndex = 0;

      typedLetter.textContent =
        "";

      readLetter.classList.add(
        "hidden"
      );

      envelope.classList.remove(
        "open"
      );

      envelopeHint.textContent =
        "Tap the letter to open it";


      talkBtn.textContent =
        "Let's Talk ❤️";

      spaceBtn.textContent =
        "I Need Some Time";

      finalResponse.textContent =
        "Whatever you feel, I'll respect it.";


      showPage("intro");

    }
  );


console.log(
  "A little universe made with love for Shofiya ♡"
);