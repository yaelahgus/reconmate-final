<template>
  <div>
    <div class="side_menu style-7 dark_theme" id="side_menu">
      <a href="#0" class="side_menu_cls" @click="toggleSideMenu">
        <img src="/assets/img/icons/4dots_light.png" alt="" />
      </a>
      <div class="content">
        <div class="logo">
          <a href="#" class="w-100">
            <img src="/assets/img/logo_9.png" alt="" />
          </a>
        </div>
        <div class="side_foot">
          <h5> Hubungi Kami </h5>
          <div class="row">
            <div class="col-lg-6">
              <a href="#"> <i class="fal fa-phone-alt me-2"></i> (+62) 8177 777 777 </a>
            </div>
            <div class="col-lg-6">
              <a href="#"> <i class="fal fa-envelope me-2 mt-4 mt-lg-0"></i> contact@reconmate.com </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="side_overlay" @click="toggleSideMenu"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSideMenu(e) {
      e.preventDefault();
      const side_menu = document.getElementById('side_menu');
      const side_overlay = document.querySelector('.side_overlay');

      side_menu && side_menu.classList.remove('show');
      side_overlay && side_overlay.classList.remove('show');
    }
  }
}
</script>
