import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: localStorage.getItem('token') || '', // Token aus dem localStorage initialisieren
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token); // Token in localStorage speichern
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token'); // Token aus localStorage entfernen
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setToken', token);
    },
    logout({ commit }) {
      commit('clearToken');
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token; // Überprüfen, ob ein Token existiert
    },
    token(state) {
      return state.token;
    },
  },
});

export default store;
