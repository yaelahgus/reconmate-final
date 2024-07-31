<template>
  <a href="#" :class="`to_top ${topText ? '':'bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center'}`">
    <i :class="`bi bi-chevron-up ${topText ? '':'fs-6 text-dark'}`"></i>
    <small v-if="topText">Top</small>
  </a>
</template>

<script>
import scrollToTop from '../../common/scrollToTop';

export default {
  props: ['topText'],
  mounted() {
    scrollToTop();
  },
}
</script>
