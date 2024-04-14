<template>
  <div >
    <input class="input" type="text" v-model="searchTerm" @input="filterUsers" placeholder="Search">
    
    <br><br>
    <table class="table">
    <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Website</th>
        <th>Company</th>
    </tr>
    <tr v-for="user in paginatedUsers" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.address.suite }}, {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}</td>
        <td>{{ user.website }}</td>
        <td>{{ user.company.name }}, {{ user.company.catchPhrase }}, {{ user.company.bs }}</td>
    </tr>
    </table>
    <br>
    <div>      
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['paginatedUsers', 'totalPages']),

    searchTerm: {
      get() {
        return this.$store.state.searchTerm;
      },

      set(value) {
        this.$store.commit('Set_Search_Term', value);
      },
    },
    currentPage: {
      get() {
        return this.$store.state.currentPage;
      },
      
      set(page) {
        this.$store.commit('Set_Current_Page', page);
      },
    },
  },
  methods: {
    ...mapActions(['fetchUsers']),

    filterUsers() {
      this.$store.commit('Filter_User');
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
table, th, td {
  border-collapse: collapse;
  border: 1px solid black;
  text-align: center;
  align-content: center;
  table-layout: fixed;
  width: 100%;
  margin: 4px;
}
.input {
text-align: left;
padding: 5px;
}
</style>
