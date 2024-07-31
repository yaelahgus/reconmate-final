<template>
  <section class="clients style-4">
    <div class="container">
      <div class="text-center">
        <h5 class="fw-bold mb-60"><span class="color-blue4">{{ rtl ? '25K+ تحميل' : '25K+ Installation' }}</span> {{ rtl ? 'واستخدام الخدمات' : 'and Featured on' }}</h5>
      </div>
      <div class="client-logos pb-70">
        <div class="row align-items-center">
          <div class="col-6 col-lg-2" v-for="(client, index) in clients" :key="index">
            <a href="#" class="img d-block">
              <img :src="client" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import clients from '../../data/App/clients.json';

export default {
  props: ['rtl'],
  data() {
    return {
      clients
    }
  },
}
</script>
