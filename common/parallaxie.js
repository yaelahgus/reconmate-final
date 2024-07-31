export default function parallaxie(selector) {
  let elementBg = document.querySelector(selector);
  let image = elementBg.getAttribute("data-background");
  let position = elementBg.getBoundingClientRect().top * 0.55;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = 'cover';
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = 'fixed';
  elementBg.style.backgroundPosition = `center ${position}px`;

  window.addEventListener("scorll", () => {
    position = elementBg.getBoundingClientRect().top * 0.55;
    elementBg.style.backgroundPosition = `center ${position}px`;
  });
}