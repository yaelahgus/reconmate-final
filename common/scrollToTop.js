export default function scrollToTop() {
  const toTop = document.querySelector(".to_top");

  if (!toTop) return;

  window.addEventListener("scroll", function() {
    var bodyScroll = window.scrollY;
  
    if (bodyScroll > 700) {
      toTop.classList.add("show");
    } else {
      toTop.classList.remove("show");
    }
  });

  toTop.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}