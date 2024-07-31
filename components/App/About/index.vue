<template>
  <section :class="`about ${noWave ? '':'section-padding'} style-4`">
    <FirstContent :features="data.features" :rtl="rtl" v-if="!noFirstContent" />
    <SecondContent :accordions="data.accordions" :rtl="rtl" />
    <ThirdContent :features="data.thirdFeatures" :rtl="rtl" />
    <Integration :integrations="data.integrations" :rtl="rtl" v-if="!noIntegration" />
    <img src="/assets/img/about/about_s4_wave.png" alt="" class="top-wave" v-if="!noWave" />
    <img src="/assets/img/about/about_s4_wave.png" alt="" class="bottom-wave" v-if="!noWave" />
  </section>
</template>

<script>
import aboutData from '../../../data/App/about.json';
import aboutDataRTL from '../../../data/App/about-rtl.json';

import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import Integration from './Integration';

export default {
  props: ['noFirstContent', 'noIntegration', 'noWave', 'rtl'],
  computed: {
    data() {
      return this.rtl ? aboutDataRTL : aboutData;
    }
  },
  components: {
    FirstContent,
    SecondContent,
    ThirdContent,
    Integration
  }
}
</script>
