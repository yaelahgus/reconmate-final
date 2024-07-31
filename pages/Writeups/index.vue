<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <SearchBar @search="performSearch" @resetPage="resetPagination" />
    <ResultsList ref="resultsList" :results="results" :query="query" />
    <Footer />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import AbsoluteContainer from '../../components/Navbars/AbsoluteContainer';
import TopNav from '../../components/Navbars/TopNav';
import Navbar from '../../components/Navbars/SaasNav';
import SearchBar from '../../components/CyberSecurity/SearchBar.vue';
import ResultsList from '../../components/CyberSecurity/ResultsList.vue';
import Footer from '../../components/CyberSecurity/Footer';
import writeupsData from '../../scripts/writeups.json';

export default {
  name: 'Writeups',
  layout: "Main",
  components: {
    AbsoluteContainer,
    Navbar,
    SearchBar,
    ResultsList,
    Footer
  },
  data() {
    return {
      query: '',
      results: writeupsData.data
    };
  },
  methods: {
    performSearch(query) {
      this.query = query;
      if (!query.trim()) {
        this.results = [];
      } else {
        this.results = writeupsData.data.filter(result =>
          result.Links[0].Title.toLowerCase().includes(query.toLowerCase()) ||
          result.Links[0].Link.toLowerCase().includes(query.toLowerCase())
        );
      }
    },
    resetPagination() {
      this.$refs.resultsList.currentPage = 1;
    }
  },
  head() {
    return {
      titleTemplate: "%s - Writeups",
    }
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  }
}
</script>

<style>
.navbar {
  margin-bottom: 20px; /* Add margin at the bottom of the navbar */
}

.search-bar {
  margin-top: 20px; /* Add margin at the top of the search bar */
}
</style>