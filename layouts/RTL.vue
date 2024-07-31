<template>
  <div>
    <PreLoader />
    <Nuxt />
    <ScrollToTop />
  </div>
</template>

<script>
import fixStylesheetsOrder from "../common/fixStylesheetsOrder";
import PreLoader from "../components/PreLoader/index.vue";
import ScrollToTop from "../components/ScrollToTop/index.vue";

export default {
  components: {
    PreLoader,
    ScrollToTop
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href:'/assets/css/lib/bootstrap-icons.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/swiper.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/bootstrap.rtl.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/all.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/animate.css' },
        { rel: 'stylesheet', href:'/assets/css/style.css' },
        { rel: 'stylesheet', href:'/assets/css/rtl_style.css' },
      ]
    }
  },
  mounted() {
    fixStylesheetsOrder(true);
  }
}
</script>
