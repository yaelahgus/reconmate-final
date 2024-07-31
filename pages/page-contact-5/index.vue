<template>
  <div>
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="contact-page style-5">
      <Form styleType="5" />
      <Map />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import Navbar from '../../components/Navbars/SaasNav';
import Form from '../../components/Contact/Form';
import Map from '../../components/Contact/Map';
import Footer from '../../components/CyberSecurity/Footer';

export default {
  name: 'PageContact5',
  layout: "Main",
  components: {
    Navbar,
    Form,
    Map,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - Page Contact 5",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
