import Vue from "vue";
import Vuex from "vuex";
import Axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

let mogo_api = process.env.VUE_APP_FODDS_API;

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    foods: []
  },

  mutations: {
    fetchFood(state, { res }){
        state.foods = res.data;
    },
    addFood(state, { payload }) {
      state.foods.push(payload);
    },
    deleteFood(state, { index }) {
        state.foods.splice(index, 1);
    },
    editFood(state, {payload}){
        state.foods[payload.index].name = payload.name;
        state.foods[payload.index].price = payload.price;
    }
  },

  actions: {
    async fetchFood({ commit }){
        await Axios.get(`${mogo_api}/api/food/`).then(res => commit("fetchFood", { res })).catch(err => alert(err));
    },
    async addFood({ commit }, payload) {
        await Axios.post(`${mogo_api}/api/food/`, payload).then(() => commit("addFood", { payload })).catch(err => alert(err));
    },
    async deleteFood({ commit }, payload) {
        await Axios.delete(`${mogo_api}/api/food/` + payload._id).then(() => commit("deleteFood", { payload })).catch(err => alert(err));
    },
    async editFood({ commit }, payload){
        await Axios.put(`${mogo_api}/api/food/` + payload._id, payload).then(() => commit("editFood", {payload})).catch(err => alert(err));
    }
  },

  getters: {
    foods: state => state.foods
  }
});