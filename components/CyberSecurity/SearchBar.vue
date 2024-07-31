<template>
  <div>
      <div class="search-bar">
          <input type="text" v-model="query" placeholder="Search..." @input="search" />
          <button @click="search">Search</button>
      </div>
      <div class="tags">
          <button @click="tagSearch('XSS')">XSS</button>
          <button @click="tagSearch('SSRF')">SSRF</button>
          <button @click="tagSearch('SQLi')">SQLi</button>
          <button @click="tagSearch('RCE')">RCE</button>
          <button @click="tagSearch('IDOR')">IDOR</button>
          <button @click="tagSearch('CSRF')">CSRF</button>
          <button @click="tagSearch('DISCLOSURE')">DISCLOSURE</button>
          <button @click="tagSearch('INJECTIONS')">INJECTIONS</button>
      </div>
  </div>
</template>

  <script>
  export default {
    data() {
    return {
      query: '',
      activeTags: []
    };
  },
  methods: {
    search() {
      this.$emit('search', this.query);
      this.$emit('resetPage');
    },
    tagSearch(tag) {
      const tagMap = {
        'XSS': 'xss',
        'SSRF': 'ssrf',
        'SQLi': 'sql',
        'RCE': 'rce',
        'IDOR': 'idor',
        'CSRF': 'csrf',
        'DISCLOSURE': 'disclosure',
        'INJECTIONS': 'injection'
      };
      this.activeTags = [tagMap[tag] || tag]; // Use mapped tag or default if not found
      this.$emit('search', this.activeTags.join(' '));
      this.$emit('resetPage');  // Add this line to emit an event to reset the page
    }
  }
  };
  </script>

    <style scoped>
    .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px auto;
  }

  .search-bar input {
    padding: 10px;
    width: 50%;
    margin-right: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
  }

  .search-bar button {
    padding: 10px 20px;
    background-color: #28a745; /* Green background */
    color: white;
    border: none;
    border-radius: 5px;
  }

  .tags {
    display: flex;
    justify-content: center; /* Center tags horizontally */
    flex-wrap: wrap; /* Allow tags to wrap */
    margin: 10px 0; /* Vertical margin for spacing */
  }

  .tags button {
    margin: 5px;
    background-color: #007BFF; /* Blue background */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
  }

    </style>