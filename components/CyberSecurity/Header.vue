<template>
  <header class="style-10">
    <div class="navs-container">
      <Navbar />
    </div>
    <div class="container">
      <div class="content pt-50">
        <div class="row align-items-center gx-0">
          <div class="col-lg-6">
            <div class="info">
              <h2>Temukan Akses Kerentanan Keamanan Siber Terbaru.</h2>
              <h6>Learn Together, we make our impact!</h6>
              <br>
              <div class="btns">
                <a href="/writeups" class="btn btn-icon-circle rounded-pill fw-bold brd-light text-white hover-blue7">
                  <small> Find Writeups <i class="fas fa-long-arrow-alt-right bg-light"></i> </small>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img">
              <img src="/assets/img/header/header10_img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="logos"></div>
      <div class="logos"></div>
    </div>
  </header>
</template>

<script>
import Navbar from '../Navbars/CyberNav';

export default {
  components: {
    Navbar
  }
}
</script>
