export default function scrollToSection(event) {
  event.preventDefault();

  const section = document.querySelector('[data-scroll-index="' + event.target.dataset.scrollNav + '"]');

  if (section) {
    setTimeout(() => {
      section.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}