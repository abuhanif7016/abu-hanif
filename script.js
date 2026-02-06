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