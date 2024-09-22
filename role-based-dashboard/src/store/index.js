// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      token: null,
      user: null,
      users: [],
      error: null,
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setError(state, error) {
      state.error = error;
    },
    clearUser(state) {
      state.user = null;
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    async register({ commit }, userData) {
      try {
        const { data } = await axios.post('http://127.0.0.1:8000/api/register', userData);
        commit('setToken', data.token);
        commit('setUser', data.data);
        commit('setError', null);
      } catch (error) {
        commit('setError', error.message || 'Registration failed');
      }
    },
    async login({ commit }, credentials) {
      try {
        const { data } = await axios.post('http://127.0.0.1:8000/api/login', credentials);
        // Assuming the response contains a token and user data
        const { token, user } = data.data;
        commit('setToken', token);  // Store token in Vuex state
        commit('setUser', user);
        commit('setError', null);
        return data;
      } catch (error) {
        commit('setError', error.message || 'Login failed');
      }
    },
    async logout({ commit }) {
      try {
        await axios.post('http://127.0.0.1:8000/api/logout');
        commit('clearToken');
        commit('clearUser');
        commit('setError', null);
      } catch (error) {
        commit('setError', error.message || 'Logout failed');
      }
    },
    async fetchUsers({ commit }) {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/users');
        commit('setUsers', data.data);
        commit('setError', null);
      } catch (error) {
        commit('setError', error.message || 'Failed to fetch users');
      }
    },
    async fetchUserById({ commit }, userId) {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/users/${userId}`);
        commit('setUser', data.data);
        commit('setError', null);
        return data.data; // Return user data for component use
      } catch (error) {
        commit('setError', error.message || 'Failed to fetch user');
        throw error; // Re-throw error to be handled in component
      }
    },
    async addUser({ dispatch, commit }, userData) {
      try {
        await axios.post('http://127.0.0.1:8000/api/users', userData);
        await dispatch('fetchUsers');
        commit('setError', null);
      } catch (error) {
        commit('setError', error.message || 'Failed to add user');
      }
    },
    async updateUser({ dispatch, commit }, { userId, userData }) {
      try {
        console.log("userId",userId,"userData",userData);
        await axios.put(`http://127.0.0.1:8000/api/users/${userId}`, userData);
        await dispatch('fetchUsers');
        commit('setError', null);
      } catch (error) {
        commit('setError', error.message || 'Failed to update user');
      }
    },
    async deleteUser({ dispatch, commit }, userId) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/users/${userId}`);
        await dispatch('fetchUsers');
        commit('setError', null);
      } catch (error) {
        commit('setError', error.message || 'Failed to delete user');
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    userList(state) {
      return state.users;
    },
    currentUser(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
  },
});
