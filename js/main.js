const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (toggle && nav) {
  const closeNav = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.classList.remove("is-open");
    nav.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.classList.toggle("is-open", !open);
    nav.classList.toggle("is-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
}

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.hidden = true;
    const thanks = document.querySelector(".form-thanks");
    if (thanks) thanks.hidden = false;
  });
}
