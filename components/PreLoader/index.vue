<template>
  <div id="preloader"></div>
</template>

<script>
import loadingPace from '../../common/loadingPace';

export default {
  mounted() {
    setTimeout(() => loadingPace(), 0);
  },
}
</script>