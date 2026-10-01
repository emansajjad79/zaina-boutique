// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Order Now buttons -> WhatsApp
const phone = "923703851991"; // yahan apna/client ka number likho (92 ke saath)
document.querySelectorAll(".order").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const msg = `Hello, I would like to see your "${name}" collection.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  });
});

// Header scroll par chhota ho
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll reveal
const items = document.querySelectorAll(
  ".section h2, .card, .about > *, #contact p"
);
items.forEach((el, i) => {
  el.classList.add("reveal");
  if (el.classList.contains("card")) {
    el.style.setProperty("--d", (i % 3) * 0.15 + "s"); // cards ek ek karke aayein
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
items.forEach((el) => observer.observe(el));

// 3D tilt (sirf mouse wale devices par)
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-8px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}