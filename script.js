// Mobile Menu with Touch Support
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", toggleMenu);
menuBtn.addEventListener("touchstart", (e) => e.currentTarget.style.opacity = "0.7");
menuBtn.addEventListener("touchend", (e) => e.currentTarget.style.opacity = "1");

// Close menu when clicking/tapping a link
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
}

// Dark / Light Toggle with Touch Support
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", toggleTheme);
toggle.addEventListener("touchstart", (e) => e.currentTarget.style.opacity = "0.7");
toggle.addEventListener("touchend", (e) => e.currentTarget.style.opacity = "1");

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  toggle.textContent = document.documentElement.classList.contains("dark") ? "🌙" : "☀️";
  localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
    toggle.textContent = "☀️";
  }
});

// Typing Effect
const texts = ["Web Developer", "Web Designer", "HTML & CSS | Tailwind CSS Expert","React | JavaScript Enthusiast"]
let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
  if (j < texts[i].length) {
    typing.textContent += texts[i][j++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = texts[i].substring(0, --j);
    setTimeout(erase, 60);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 300);
  }
}
type();

// Skill Bar Animation
const bars = document.querySelectorAll(".skill-bar");
window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// Bangladesh Time (Live)
function updateBDTime() {
  const timeEl = document.getElementById("bd-time");

  const options = {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  };

  const bdTime = new Intl.DateTimeFormat("en-US", options).format(new Date());
  timeEl.textContent = bdTime;
}

updateBDTime();
setInterval(updateBDTime, 1000);

//Frontend Developer Skill Bars Animation

const skillBars = document.querySelectorAll(".skill-bar");

  skillBars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.width = percent + "%";
      bar.classList.add("transition-all", "duration-1000");
    }, 200);
  });


  document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".skill-bar");
    bars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent + "%";
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".skill-bar");
    bars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent + "%";
    });
  });



// Scroll Animation for Timeline Items

  document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animate");
  const headingElement = document.querySelector(".scroll-heading");

  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  };

  const displayScrollElement = (el) => {
    el.classList.add("opacity-100", "translate-y-0");
    el.classList.remove("opacity-0", "translate-y-10");
  };

  const hideScrollElement = (el) => {
    el.classList.add("opacity-0", "translate-y-10");
    el.classList.remove("opacity-100", "translate-y-0");
  };

  const handleScrollAnimation = () => {
    // Responsive offset
    let offset = 100;
    if (window.innerWidth < 768) offset = 50;
    if (window.innerWidth < 480) offset = 30;

    // Animate heading
    if (headingElement && elementInView(headingElement, offset)) {
      headingElement.classList.add("opacity-100", "translate-x-0");
      headingElement.classList.remove("opacity-0", "-translate-x-20");
    }

    // Animate timeline items
    scrollElements.forEach((el) => {
      if (elementInView(el, offset)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  window.addEventListener("resize", handleScrollAnimation);
  window.addEventListener("load", handleScrollAnimation);
});



// Service Modal

const modal = document.getElementById("serviceModal");
const modalBox = document.getElementById("modalBox");
const modalContent = document.getElementById("modalContent");

function openService(type) {
  let items = [];

  if (type === "web") {
    items = [
      "Modern & fast website development",
      "HTML, CSS, Tailwind CSS",
      "Basic React & JavaScript",
      "SEO friendly structure",
      "Clean & maintainable code"
    ];
  }

  if (type === "ui") {
    items = [
      "Clean & modern UI design",
      "User-friendly UX",
      "Figma based design",
      "Color & typography balance",
      "Responsive layouts"
    ];
  }

  if (type === "responsive") {
    items = [
      "Mobile-first design",
      "Tablet & desktop optimized",
      "Cross-browser compatibility",
      "Flexible layouts",
      "Smooth user experience"
    ];
  }

  modalContent.innerHTML = items.map(item => `<li>${item}</li>`).join("");

  modal.classList.remove("hidden");
  setTimeout(() => {
    modalBox.classList.remove("scale-90", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeService() {
  modalBox.classList.remove("scale-100", "opacity-100");
  modalBox.classList.add("scale-90", "opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 300);
}

/* Outside click close */
modal.addEventListener("click", e => {
  if (e.target === modal) closeService();
});



// Project Slider

const projects = [
  {
    img: "img/project%20img/body%20banner.png",
    title: "Body Fitness Website",
    desc: "Modern fitness website with dynamic UI and responsive design",
    link: "#"
  },
  {
    img: "img/project%20img/medifit%20banner_image.png",
    title: "Medifit Health Landing Page",
    desc: "Professional healthcare website with clean and modern design using Tailwind CSS",
    link: "#"
  },
  {
    img: "img/project%20img/mejiwoo%20icon%20picture.png",
    title: "Mejiwoo Product Design",
    desc: "Product showcase website with sleek UI and smooth animations",
    link: "#"
  },
  {
    img: "img/project%20img/porthfolio%20banner.png",
    title: "Personal Portfolio",
    desc: "Animated portfolio website with smooth UI and interactive elements",
    link: "#"
  },
  
];

let current = 0;
let interval;

const img = document.getElementById("projectImg");
const title = document.getElementById("projectTitle");
const desc = document.getElementById("projectDesc");
const link = document.getElementById("projectLink");
const dotsWrap = document.getElementById("dots");
const sliderBox = document.getElementById("sliderBox");

function loadProject() {
  sliderBox.classList.add("opacity-0","translate-y-2");
  setTimeout(() => {
    img.src = projects[current].img;
    title.innerText = projects[current].title;
    desc.innerText = projects[current].desc;
    link.href = projects[current].link;
    updateDots();
    sliderBox.classList.remove("opacity-0","translate-y-2");
  }, 250);
}

function nextProject() {
  current = (current + 1) % projects.length;
  loadProject();
}

function prevProject() {
  current = (current - 1 + projects.length) % projects.length;
  loadProject();
}

/* Auto slide */
function startAuto() {
  interval = setInterval(nextProject, 3500);
}
function stopAuto() {
  clearInterval(interval);
}

/* Dots */
projects.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className =
    "w-2.5 h-2.5 rounded-full bg-gray-500 cursor-pointer transition";
  dot.onclick = () => { current = i; loadProject(); };
  dotsWrap.appendChild(dot);
});

function updateDots() {
  [...dotsWrap.children].forEach((d, i) => {
    d.classList.toggle("bg-blue-500", i === current);
    d.classList.toggle("bg-gray-500", i !== current);
  });
}

/* Touch Swipe Support */
let touchStartX = 0;
let touchEndX = 0;

sliderBox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
  stopAuto();
}, false);

sliderBox.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
  startAuto();
}, false);

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swiped left - show next project
      nextProject();
    } else {
      // Swiped right - show previous project
      prevProject();
    }
  }
}

/* Pause on hover */
sliderBox.addEventListener("mouseenter", stopAuto);
sliderBox.addEventListener("mouseleave", startAuto);

loadProject();
startAuto();