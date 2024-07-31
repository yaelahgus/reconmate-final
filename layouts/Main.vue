<template>
  <div>
    <PreLoader />
    <Nuxt />
    <ScrollToTop :topText="scrollTopText" />
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
  data() {
    return {
      scrollTopText: false,
      pagesWithScrollToTopText: [
      ]
    }
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href:'/assets/css/lib/bootstrap-icons.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/swiper.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/bootstrap.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/all.min.css' },
        { rel: 'stylesheet', href:'/assets/css/lib/animate.css' },
        { rel: 'stylesheet', href:'/assets/css/style.css' }
      ]
    }
  },
  mounted() {
    fixStylesheetsOrder(false);

    // Change 'ScrollToTop' component text in some pages
    if (this.pagesWithScrollToTopText.indexOf(this.$router.history.current.path) !== -1) {
      this.scrollTopText = true;
    }
  },
  watch: {
    $route() {
      if (this.pagesWithScrollToTopText.indexOf(this.$router.history.current.path) !== -1) {
        this.scrollTopText = true;
      } else {
        this.scrollTopText = false;
      }
    }
  }
}
</script>
