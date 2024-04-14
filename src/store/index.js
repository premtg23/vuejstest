import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    searchTerm: '',
    filteredUsers: [],
     currentPage: 1,
     itemsPerPage: 5,
  },
  getters: {
    paginatedUsers(state) {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;

      return state.filteredUsers.slice(startIndex, endIndex);
    },

    totalPages(state) {
      return Math.ceil(state.filteredUsers.length / state.itemsPerPage);
    },
  },
  mutations: {
    Set_Users(state, users) {
      state.users = users;
      state.filteredUsers = users;
    },
    Set_Search_Term(state, term) {
      state.searchTerm = term;
    },
    Filter_User(state) {
      
      state.filteredUsers = state.users.filter(user =>
        user.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.phone.includes(state.searchTerm) ||
        user.address.city.toLowerCase().includes(state.searchTerm.toLowerCase())||
        user.address.suite.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.address.street.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.address.zipcode.includes(state.searchTerm) ||
        user.website.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.company.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.company.catchPhrase.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        user.company.bs.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    },
    Set_Current_Page(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('Set_Users', response.data);
        console.log("total users", data);
      } catch (error) {
        console.error('No users:', error);
      }
    },
  },
  modules: {
  }
})
