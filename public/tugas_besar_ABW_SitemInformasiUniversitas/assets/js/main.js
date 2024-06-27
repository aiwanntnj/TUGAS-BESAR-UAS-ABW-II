$(document).ready(function () {
  $("#slider-hero").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    navtext: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    navContainer: "#slider-hero-nav",
  });
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const currentPage = e.target.href.split("/").pop();
    document.documentElement.style.setProperty(
      "--bg-color",
      `var(--bg-color-${currentPage})`
    );
  });
});
