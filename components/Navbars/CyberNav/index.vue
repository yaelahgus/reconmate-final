<template>
  <nav class="navbar navbar-expand-lg navbar-dark style-9" ref="navbarRef">
    <div class="container content">
      <a class="navbar-brand" href="#">
        <img src="/assets/img/logo_10.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 ps-4">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link"> Home </NuxtLink>
          </li>
          <li class="nav-item">
            <a
              :to="`#${aboutId}`"
              @click.prevent="scrollToTarget(aboutId)"
              class="nav-link"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              :to="`#${faqId}`"
              @click.prevent="scrollToTarget(faqId)"
              class="nav-link"
            >
              FAQ
            </a>
          </li>
          <li class="nav-item">
            <a
              :to="`#${teamId}`"
              @click.prevent="scrollToTarget(teamId)"
              class="nav-link"
            >
              Team
            </a>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-app" class="nav-link">
              contact
            </NuxtLink>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <NuxtLink
              to="/writeups"
              class="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold"
            >
              <span>Find Writeups <i class="bi bi-arrow-right ms-1"></i> </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  methods: {
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains("dropdown-toggle")
        ? event.target
        : event.target.querySelector(".dropdown-toggle");
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add("show");
      dropDownMenu?.classList?.add("show");
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains("dropdown")
        ? event.target
        : event.target.closest(".dropdown");
      const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
      const dropDownMenu = dropdown.querySelector(".dropdown-menu");

      dropDownToggler?.classList?.remove("show");
      dropDownMenu?.classList?.remove("show");
    },
    toggleSideMenu(e) {
      e.preventDefault();

      document.querySelector(".side_menu_btn").classList.toggle("active");

      const side_menu = document.getElementById("side_menu");
      const side_overlay = document.querySelector(".side_overlay");

      side_menu && side_menu.classList.toggle("show");
      side_overlay && side_overlay.classList.toggle("show");
    },
    scrollToTarget(id) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef);
  },
  data() {
    return {
      aboutId: "about",
      faqId: "faq",
      teamId: "team",
    };
  },
};
</script>
