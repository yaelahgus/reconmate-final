<template>
  <div class="content trd-content">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6">
          <div class="img mb-30 mb-lg-0">
            <img src="/assets/img/about/about_s4_img3.png" alt="" />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="info">
            <div class="section-head style-4">
              <small class="title_small">{{ rtl ? 'ثيمات جميلة' : 'Beautiful Themes' }}</small>
              <h2 class="mb-30">{{ rtl ? 'ركز أكثر مع' : 'Focus More With' }} <span>{{ rtl ? 'المظهر الداكن' : 'Dark Theme' }}</span> </h2>
            </div>
            <p class="text mb-40">
              {{ rtl ? 'قم بتطبيق سمات نوتيرو الأنيقة حسب ذوقك. تعمل السمات المظلمة بشكل ممتاز لأولئك الذين يفضلون الوضع الخالي من الإلهاء.' : 'Apply Notero’s elegant themes to your taste. Dark themes work excellently for those who prefer distraction-free mode.' }}
            </p>
            <ul>
              <li :class="`d-flex align-items-center ${feature.active ? '':'op-4'}`" v-for="(feature, index) in features" :key="index">
                <i class="bi bi-dot fs-2 me-2 lh-1 color-blue4"></i>
                <h6 class="fw-bold">{{ feature.title }}</h6>
              </li>
            </ul>
            <NuxtLink to="/page-services-5" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
              <small>{{ rtl ? 'اكتشف الآن' : 'Discovery Now' }}</small>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s4_bubble.png" alt="" class="bubble" />
  </div>
</template>

<script>
export default {
  props: ['rtl', 'features']
}
</script>
