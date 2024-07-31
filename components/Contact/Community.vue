<template>
  <section class="community section-padding style-5">
    <div class="container">
      <div class="section-head text-center style-4 mb-40">
        <h2 class="mb-20">Hubungi <span>Kami</span> </h2>
        <p>We will contact again after receive your request in 24h</p>
      </div>
      <div class="content rounded-pill">
        <div class="commun-card" v-for="(card, i) in communityData" :key="i">
          <div class="icon icon-45">
            <img :src="card.icon" alt="" />
          </div>
          <div class="inf">
            <h5>{{ card.info }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import communityData from '../../data/Contact/community.json';

export default {
  data() {
    return {
      communityData
    }
  },
}
</script>
