<template>
  <div class="results-list">
    <div class="button-container">
      <button @click="downloadJSON" class="download-button">Download as JSON file</button>
      <button @click="downloadCSV" class="download-button">Download as CSV file</button>
    </div>
    <div class="entries-container">
      <label for="entries">Show
        <select v-model="pageSize" @change="resetPagination">
          <option v-for="size in [10, 25, 50, 100]" :key="size" :value="size">{{ size }}</option>
        </select> entries
      </label>
    </div>
    <p>
      Found {{ results.length }} resources related to
      <strong>{{ query }}</strong>
    </p>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th @click="sortResults('title')">
            Title
            <i :class="getSortIcon('title')"></i>
          </th>
          <th @click="sortResults('tags')">
            Tags
            <i :class="getSortIcon('tags')"></i>
          </th>
          <th @click="sortResults('programs')">
            Programs
            <i :class="getSortIcon('programs')"></i>
          </th>
          <th @click="sortResults('authors')">
            Authors
            <i :class="getSortIcon('authors')"></i>
          </th>
          <th @click="sortResults('bounty')">
            Bounty
            <i :class="getSortIcon('bounty')"></i>
          </th>
          <th @click="sortResults('publicationDate')">
            Publication Date
            <i :class="getSortIcon('publicationDate')"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in paginatedResults" :key="index">
          <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
          <td>
            <a :href="result.Links[0].Link" target="_blank">
              <strong>{{ result.Links[0].Title }}</strong>
            </a>
          </td>
          <td>{{ result.Bugs.join(', ') }}</td>
          <td>{{ result.Programs.join(', ') }}</td>
          <td>{{ result.Authors.join(', ') }}</td>
          <td>{{ formatBounty(result.Bounty) }}</td>
          <td>{{ result.PublicationDate }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="pagination">
      <button
        @click="currentPage > 1 ? currentPage-- : 0"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <input type="number" v-model.number="jumpToPage" @keyup.enter="goToPage" min="1" :max="totalPages" placeholder="page" class="jump-input" />
      <button
        @click="currentPage++"
        :disabled="currentPage * pageSize >= results.length"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['results', 'query'],
  data() {
    return {
      currentPage: 1,
      pageSize: 25, // Default to 25 entries per page
      sortKey: '',
      sortOrder: 1, // 1 for ascending, -1 for descending
      jumpToPage: null
    };
  },
  computed: {
    paginatedResults() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.sortedResults.slice(start, end);
    },
    sortedResults() {
      return this.results.slice().sort((a, b) => {
        let result = 0;
        if (this.sortKey === 'title') {
          result = a.Links[0].Title.localeCompare(b.Links[0].Title);
        } else if (this.sortKey === 'tags') {
          result = a.Bugs.join(', ').localeCompare(b.Bugs.join(', '));
        } else if (this.sortKey === 'programs') {
          result = a.Programs.join(', ').localeCompare(b.Programs.join(', '));
        } else if (this.sortKey === 'authors') {
          result = a.Authors.join(', ').localeCompare(b.Authors.join(', '));
        } else if (this.sortKey === 'bounty') {
          result = a.Bounty.localeCompare(b.Bounty);
        } else if (this.sortKey === 'publicationDate') {
          result = new Date(a.PublicationDate) - new Date(b.PublicationDate);
        }
        return result * this.sortOrder;
      });
    },
    totalPages() {
      return Math.ceil(this.results.length / this.pageSize);
    },
  },
  methods: {
    sortResults(key) {
      if (this.sortKey === key) {
        this.sortOrder *= -1;
      } else {
        this.sortKey = key;
        this.sortOrder = 1;
      }
    },
    getSortIcon(key) {
      if (this.sortKey === key) {
        return this.sortOrder === 1 ? 'bi bi-arrow-up' : 'bi bi-arrow-down';
      }
      return 'bi bi-arrow-down-up';
    },
    formatBounty(bounty) {
      return bounty !== '-' ? `$${bounty}` : bounty;
    },
    downloadJSON() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.results, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "writeups.json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    downloadCSV() {
      const csvContent = this.results.map(result => {
        return [
          result.Links[0].Title,
          result.Bugs.join(', '),
          result.Programs.join(', '),
          result.Authors.join(', '),
          this.formatBounty(result.Bounty),
          result.PublicationDate
        ].join(',');
      }).join('\n');
      const dataStr = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "writeups.csv");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    resetPagination() {
      this.currentPage = 1;
    },
    goToPage() {
      if (this.jumpToPage >= 1 && this.jumpToPage <= this.totalPages) {
        this.currentPage = this.jumpToPage;
      }
    }
  }
};
</script>

<style scoped>
.results-list {
  margin-bottom: 20px; /* Add margin at the bottom of the results list */
}

.results-list table {
  width: 100%;
  border-collapse: collapse;
}

.results-list th,
.results-list td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

.results-list th {
  background-color: #f4f4f4;
}

.results-list a {
  color: #007bff; /* Example: blue color for links */
  text-decoration: none; /* Removes underline */
}

.table-container {
  overflow-x: auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.download-button {
  padding: 10px 20px;
  background-color: #28a745; /* Green background */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
}

.entries-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.entries-container select {
  margin-left: 5px;
  margin-right: 5px;
}

.jump-input {
  width: 60px;
  padding: 5px;
  margin: 0 10px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>