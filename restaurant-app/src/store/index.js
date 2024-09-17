import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null, // Initialize with null or an empty object
  },
  mutations: {
    setUser(state, user) {
      state.user = user; // Set the user state
    },
    logout(state) {
      state.user = null; // Clear the user state on logout
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user); // Trigger the mutation to set the user
    },
    logout({ commit }) {
      commit('logout'); // Trigger the mutation to clear the user state
    }
  },
  getters: {
    loggedInUser: (state) => state.user, // Return the user from state
  }
});

export default store;
