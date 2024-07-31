<template>
  <div>
    <AbsoluteContainer>
      <TopNav styleType="5" />
      <Navbar ref="navbarRef" />
    </AbsoluteContainer>
    <main class="erorr-404-page style-5">
      <NotFound />
    </main>
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import AbsoluteContainer from '../../components/Navbars/AbsoluteContainer';
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import NotFound from '../../components/404';;

export default {
  name: 'Page404',
  layout: "Main",
  components: {
    AbsoluteContainer,
    TopNav,
    Navbar,
    NotFound
  },
  head() {
    return {
      titleTemplate: "%s - Page 404",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>
