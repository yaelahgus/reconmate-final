<template>
  <div>
    <PreLoader />
    <Navbar ref="navbarRef" />
    <main>
      <Nuxt />
    </main>
    <ScrollToTop />
  </div>
</template>

<script>
import navbarScrollEffect from "../common/navbarScrollEffect";
import PreLoader from "../components/PreLoader/index.vue";
import ScrollToTop from "../components/ScrollToTop/index.vue";
import Navbar from '../components/Navbars/PreviewNav';

export default {
  components: {
    PreLoader,
    ScrollToTop,
    Navbar
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href:'/assets/css/lib/bootstrap-icons.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/swiper.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/bootstrap.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/all.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/animate.css' },
        { rel: 'stylesheet', href:'/assets/css/style.css' },
        { rel: 'stylesheet', href:'/landing-preview/css/preview-style.css' },
      ],
      script: [
        { src: "/landing-preview/js/parallax.min.js" }
      ]
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
