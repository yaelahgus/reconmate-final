<template>
  <div :class="`top-navbar style-${styleType}`">
    <div class="container">
      <div class="content text-white">
        <span class="btn sm-butn bg-white py-0 px-2 me-2 fs-10px">
        </span>
        <img src="/assets/img/icons/nav_icon/imoj_heart.png" alt="" class="icon-15 me-1" />
        <NuxtLink to="/page-contact-5" class="fs-10px text-decoration-underline ms-2">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["styleType", "rtl"]
}
</script>
