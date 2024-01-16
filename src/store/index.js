import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import exercises from './modules/exercises'
import clients from './modules/clients'
Vue.use(Vuex)

 const base_url= "https://belvoapiproject.onrender.com/" 

export default new Vuex.Store({
  state: {
    clientID: null,
    user: null,
    bankName: null,
    sessions:[
      /* [{}, {}, {}],
      [{}, {}] */
    ],
    excError: false,
    excError2: false,
    disablePDF: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    LOGIN: ({ commit }, data) => {
      console.log(data)
      return new Promise((resolve, reject) => {
        const formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      axios.post(base_url + "token/", formData).then(response => {
          resolve(response);
          commit
      }).catch(err => { reject(err); })
      })
    },
    GET: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
          axios.get(base_url + data/* , JSON.stringify(data) */, {headers: {
            'Content-Type': 'application/json'
          }}).then(response => {
              resolve(response);
              commit
          }).catch(err => { reject(err); })
      })
    },
    GET_CLIENT: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
          axios.get(base_url + data.url, {headers: {
            'Content-Type': 'application/json'
          }}).then(response => {
              resolve(response);
              commit
          }).catch(err => { reject(err); })
      })
    },
  },
  modules: {
    exercises,
    clients
  }
})
