const navToggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector(".navbar-collapse");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("showNav");
});

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Designer", { delay: 400 })
  .pause(500)
  .delete(12)
  .type("Web Developer", { delay: 400 })
  .pause(500)
  .delete(14)
  .go();
