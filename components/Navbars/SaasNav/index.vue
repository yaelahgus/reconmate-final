<template>
  <nav class="navbar navbar-expand-lg navbar-light style-5" :class="{'bg-transparent': isTransparent}">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/assets/img/logo_home5.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/#about" class="nav-link">
              About
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/#faq" class="nav-link">
              FAQ
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/#team" class="nav-link">
              Team
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-app" class="nav-link">
              <!--  <img src="/assets/img/icons/nav_icon/price.png" alt="" class="icon-15 me-1">  -->
              contact
            </NuxtLink>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex align-items-center">
            <span class="nav-item">
              <NuxtLink to="#" class="nav-link">
                <i class="bi bi-arrow-right-circle fs-5 me-2"></i>
                Request Content
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isTransparent'],
  methods: {
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add('show');
      dropDownMenu?.classList?.add('show');
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
      const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
      const dropDownMenu = dropdown.querySelector('.dropdown-menu');

      dropDownToggler?.classList?.remove('show');
      dropDownMenu?.classList?.remove('show');
    }
  }
}
</script>
