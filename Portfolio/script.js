// Mobile nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Sticky header shadow on scroll
const header = document.getElementById('header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY || 0;
  header.style.boxShadow = y > 12 ? '0 8px 24px rgba(0,0,0,.3)' : 'none';
  lastY = y;
});

// IntersectionObserver for reveal animations
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Current year
document.getElementById('year').textContent = new Date().getFullYear();




const canvas = document.getElementById("skillsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Shopify Liquid",
  "Tailwind",
  "React",
  "App Integrations",
  "Theme Development",
  "Store Migration",
  "API Integration",
  "SEO",
  "Performance Optimization"
];

let floatingSkills = [];

for (let i = 0; i < skills.length; i++) {
  floatingSkills.push({
    text: skills[i],
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: 14 + Math.random() * 10,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "16px monospace";
  ctx.fillStyle = "#00ffff";

  floatingSkills.forEach(skill => {
    ctx.font = skill.size + "px monospace";
    ctx.fillText(skill.text, skill.x, skill.y);

    skill.x += skill.speedX;
    skill.y += skill.speedY;

    // Reset when out of screen
    if (skill.x < 0 || skill.x > canvas.width)
      skill.speedX *= -1;

    if (skill.y < 0 || skill.y > canvas.height)
      skill.speedY *= -1;
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});