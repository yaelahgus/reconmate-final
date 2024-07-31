<template>
  <div class="integration pt-60" data-scroll-index="3">
    <div class="section-head text-center style-4">
      <small class="title_small">{{ rtl ? 'دفعة لمرة واحدة' : 'One-Time Payment' }}</small>
      <h2 class="mb-20">{{ rtl ? 'متوافق مع' : 'Integration With' }} <span>{{ rtl ? 'التطبيقات الشعبية' : 'Popular Apps' }}</span> </h2>
      <p>{{ rtl ? 'نوتيرو يتكامل مع التطبيقات الشعبية. تساعدك على التواصل والتعاون بسهولة' : 'Notero intergrate with popular apps. Help you easy to connect and collaboration' }}</p>
    </div>
    <div class="container">
      <div class="content">
        <div class="img" v-for="(integration, index) in integrations" :key="index">
          <img :src="integration" alt="" class="mt-30" />
        </div>
      </div>
    </div>
    <img src="/assets/img/about/intg_back.png" alt="" class="intg-back" />
  </div>
</template>

<script>
export default {
  props: ['rtl', 'integrations']
}
</script>
