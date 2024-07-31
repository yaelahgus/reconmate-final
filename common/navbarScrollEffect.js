export default function navbarScroll(navbar, isTransparent, isFaqPage) {
  if (!navbar) return;

  if (window.pageYOffset > 300) {
    navbar.classList.add("nav-scroll");
    if (isTransparent) navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("nav-scroll");
    if (isTransparent) navbar.classList.add("bg-transparent");
  }

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
      if (isTransparent) navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("nav-scroll");
      if (isTransparent) navbar.classList.add("bg-transparent");
    }
  });
}