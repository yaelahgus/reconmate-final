<template>
  <div>
    <SideMenu />
    <Header />
    <main>
      <About />
      <FAQ />
      <Team />
      <Blog />
    </main>
    <Footer />
  </div>
</template>

<script>
import SideMenu from '../components/CyberSecurity/SideMenu';
import Header from '../components/CyberSecurity/Header';
import About from '../components/CyberSecurity/About';
import FAQ from '../components/CyberSecurity/FAQ';
import Team from '../components/CyberSecurity/Team';
import Blog from '../components/CyberSecurity/Blog';
import Footer from '../components/CyberSecurity/Footer';

export default {
  name: 'HomeCyberSecurity',
  layout: "Main",
  components: {
    SideMenu,
    Header,
    About,
    FAQ,
    Team,
    Blog,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s",
    }
  },
  mounted() {
    document.body.classList.add('home-style-9');
  },
}
</script>
