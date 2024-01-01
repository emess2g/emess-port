//  onscroll nav bar
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0.1);
});

// window scroll animation

let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if(top >= offset && top < offset + height ){
       sec.classList.add('show-animate');
    }
    else{
      sec.classList.remove('show-animate');
    }
  });
}

// Dark mode script

const darkIcon = document.querySelector(".themeIcon");
darkIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkIcon.classList = "fa-solid fa-sun";
  } else {
    darkIcon.classList = "fa-solid fa-moon";
  }
});

//  darkIcon.onclick = function () {
//     document.body.classList.toggle('dark-theme');
//  }

//
const menu = document.querySelector(".menu-links");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-icon");

function openNav() {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  openBtn.style.transition = "ease-in 5s"
  openBtn.style.display = "none";
}

function closeNav() {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  closeBtn.style.transition = "ease-in 5s"
  openBtn.style.display = "inline-block";
}

// const navLinks = document.querySelector('.menu-links a');
// navLinks.forEach(navLinks => {
//   navLinks.addEventListener('click', () => {

//   })
// })

const text = "connect let build quality projects together";
const typingSpeed = 100;
const cursor = document.getElementById("cursor");
const typingEffect = document.getElementById("textEffect");

let charIndex = 0;

function textEffect() {
  if (charIndex < text.length) {
    typingEffect.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(textEffect, typingSpeed);
  } else {
    cursor.style.display = "none";
  }
}

textEffect();

      // abt script for sec bg color change

//  document.addEventListener( "scroll" , () => {
//   const scrollPosition = window.scrollY;
//   const abtScroll = document.querySelector('.abt-section');

//   if(scrollPosition < window.innerHeight){
//     abtScroll.style.backgroundColor = '#0a0a0a';
//   }else{
//     abtScroll.style.backgroundColor = '#fff';
//   }
  
//  })    



     //////////// javaScript code for skill section

// skills data
const skills = [
  {
    skillImg: `<i class="fa-brands fa-html5 "></i>`,
    name: `HTML`,
    level: `80%`,
  },
  {
    skillImg: ` <i class="fa-brands fa-css3 "></i>`,
    name: `CSS`,
    level: `70%`,
  },
  {
    skillImg: ` <i class="fa-brands fa-js"></i>`,
    name: `JAVASCRIPT `,
    level: `40%`,
  },
  {
    skillImg: ` <img class="vite-icon" src="./images/vite-icon.png"></img>`,
    name: `VITE `,
    level: `40%`,
  },
  {
    skillImg: ` <i class="fa-brands fa-github"></i>`,
    name: `GITHUB `,
    level: `70% `,
  },
  {
    skillImg: ` <i class="fa-brands fa-react"></i>`,
    name: `REACT`,
    level: `10%`,
  },
];

let skillsHTML = "";
// accumulator variable

skills.forEach((skill) => {
  skillsHTML += `
    <div class="skill-card animate df">
         ${skill.skillImg}
        <div class="skill-name-container df">
            <div class="tooltip">
            <span class="tip-text">${skill.level}</span>
             </div>
            <strong class="skill-name">${skill.name}</strong>     
        </div>
    </div>
    `;
});

document.querySelector(".js-skill-container").innerHTML = skillsHTML;




/////////////////////// js for projects

const projects = [
  {
    projectLink: `href="https://github.com/emess2g/Twitter-Clone.git"`,
    projectName: `X(formerly Twitter) Clone`,
    projectImg: `<img class="project-img" src="./images/x-clone.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ``,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
  {
    projectLink: `href="https://github.com/emess2g/Twitter-Clone.git"`,
    projectName: `Educational Website`,
    projectImg: `<img class="project-img" src="./images/sch-web.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ` <i class="fa-brands fa-react"></i>`,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
  {
    projectLink: `href="https://github.com/emess2g/Twitter-Clone.git"`,
    projectName: `Car Rental Website`,
    projectImg: `<img class="project-img" src="./images/car-rental.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ``,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
  {
    projectLink: `href="https://github.com/emess2g/Youtube-Clone.git"`,
    projectName: `Youtube Clone`,
    projectImg: `<img class="project-img" src="./images/yt-clone.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ` `,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
  {
    projectLink: `href="https://github.com/emess2g/donation-page"`,
    projectName: `Donation Website`,
    projectImg: `<img class="project-img" src="./images/donation.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      js: ` <i class="fa-brands fa-js"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ` `,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
  {
    projectLink: `href="https://github.com/emess2g/rock-paper-scissor-game"`,
    projectName: `Rock Paper Scissor `,
    projectImg: `<img class="project-img" src="./images/rps-game.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      js: ` <i class="fa-brands fa-js"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ` <i class="fa-brands fa-react"></i>`,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
  {
    projectLink: `href="https://github.com/emess2g/Twitter-Clone.git"`,
    projectName: `Coin Flip Game`,
    projectImg: `<img class="project-img" src="./images/coinflip.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ` <i class="fa-brands fa-react"></i>`,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
  {
    projectLink: `href="https://github.com/emess2g/Twitter-Clone.git"`,
    projectName: `Calculator`,
    projectImg: `<img class="project-img" src="./images/calculator.png" alt="">`,
    tools: {
      toolIcon: ` <i class="fa-brands fa-html5"></i>`,
      css: ` <i class="fa-brands fa-css3"></i>`,
      git: ` <i class="fa-brands fa-github"></i>`,
      react: ` <i class="fa-brands fa-react"></i>`,
    },
    projectDetails: `
    <p class="project-details">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero illo, deleniti optio, quaerat iure consequatur
     aut fugit in facilis, eum nesciunt ab voluptates. 
    Libero quae accusamus aspernatur sed, tenetur inventore?
    </p>
    `,
  },
];

let projectHTML = "";

projects.forEach((projects) => {
  projectHTML += `
   
       
        <div class="project-card swiper-slide ">
        <a ${projects.projectLink}>
            ${projects.projectImg}
            <h3 class="proj-title">${projects.projectName}</h3>
            <div class="tools df">
            ${projects.tools.toolIcon}
            ${projects.tools.css}
            ${projects.tools.git}
            ${projects.tools.react}
            </div>
            ${projects.projectDetails}
            </a>
        </div>
       
   
    `;
});

document.querySelector(".js-pro-container").innerHTML = projectHTML;

// slider
var swiper = new Swiper(".project-wrapper", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1.3,
    },
    950: {
      slidesPerView: 2.5,
    },
  },
});

const faqs = [
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
  {
    icon: `<i class="fa-solid fa-plus"></i>`,
    question: `Are you willing to work Remote`,
    answer: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ipsa maiores accusamus error ea a molestiae, adipisci nemo pariatur totam dicta! Tempora,
        consectetur. Laborum,
        aliquid rerum ipsam odit aspernatur quos cupiditate!`,
  },
];

let faqsHTML = "";

faqs.forEach((faqs) => {
  faqsHTML += `
    <article class="faq faqHidden">
    <div class="faq__icon">
    <i class="fa-solid fa-plus"></i>
    </div>
    <div class="question__answer">
    <h4>${faqs.question}</h4>
    <p>  ${faqs.answer} </p>
    </div>
</article>
    `;
});

document.querySelector(".js-faqs-container").innerHTML = faqsHTML;

const faqsHidden = document.querySelectorAll(".faqHidden");

faqsHidden.forEach((faqsHidden) => {
  faqsHidden.addEventListener("click", () => {
    faqsHidden.classList.toggle("open");

    //change icon
    const icon = faqsHidden.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

const vMore = document.querySelector(".js-vm-btn");
const vMoreContent = document.querySelector(".js-btn-content");
// const vLessBtn= document.querySelector('.js-btn-less');
function displayMore() {
  vMore.addEventListener("click", () => {
    if (vMore.classList.toggle("open") === true) {
      vMoreContent.style.display = "none";
    } else {
      vMoreContent.style.display = "block";
    }
  });
}

displayMore();
