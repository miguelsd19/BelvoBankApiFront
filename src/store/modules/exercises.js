import axios from "axios";

const base_url= "https://belvoapiproject.onrender.com"
//const base_url= "http://localhost:4000/api"
const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

export default{
    namespaced: true,
    state: {
        Exercise: [],
        Transactions:[],
        Link:"",
        AccountId:"",
        currentExercise: [],
        MuscGroups:[]
    },
    mutations: {
        setExercise(state, payload) {
            state.Exercise = payload;
        },
        setTransactions(state, payload) {
            state.Transactions = payload;
        },
        setAccountId(state, payload) {
            state.AccountId = payload;
        },
        setLinkId(state, payload) {
            state.Link = payload;
        },
        setCurrentExercise(state, payload) {
            state.currentExercise = payload;
        },
        setMuscGroups(state, payload) {
            state.MuscGroups = payload;
        }
    },

    actions: {

        async getExercise({ commit }, bankName) {
            try {
                    const res = await axios.get(base_url + "/bank/" + bankName);
                    commit('setExercise', res.data);
            } catch (error) {
                console.error(error)
            }
        },
        async getTransactions({ commit, state }) {
            console.log("hey")
            try {
                    const res = await axios.get(base_url + "/transactions/" + state.Link + "/" + state.AccountId);
                    console.log(res.data)
                    commit('setTransactions', res.data.results);
            } catch (error) {
                console.error(error)
            }
        },
        async getMuscularGroups({ commit, state }) {
            try {
                if (state.MuscGroups.length === 0) {
                    const res = await axios.get(base_url + "/grupos-musculares");
                    commit('setMuscGroups', res.data);
                }
            } catch (error) {
                console.error(error)
            }
        },
        async editExercise({state, commit}, editExercise){
            //console.log(editExercise)
            let EditExerciseApi = {_id:editExercise._id, nombre:editExercise.nombre, musculo: editExercise.musculo, grupoMuscular:editExercise.grupoMuscular, link:editExercise.link }
            //xgconsole.log(EditExerciseApi)
            const res =  await axios.put(base_url + "/ejercicios/" + editExercise._id , EditExerciseApi,  config);
            let EditExerciseLocal = res.data
            return new Promise((resolve, reject) => {
                if (res.status === 200) {
                    //let EditExerciseLocal = {_id:editExercise._id, nombre:editExercise.nombre, musculo: editExercise.musculo, grupoMuscular:editExercise.grupoMuscularObj, link:editExercise.link }
                    console.log(EditExerciseLocal)
                    commit("setExercise", state.Exercise.filter(exercise => exercise._id !== EditExerciseLocal._id))
                    state.Exercise.push(EditExerciseLocal);
                    resolve(200);
                } else {
                    // Rechazar la promesa con un mensaje de error
                    console.log(res)
                    reject("Error en la petición HTTP");
                }
        });
        },
        async addExercise({ state}, NewExercise) {
            const res = await axios.post(base_url + "/ejercicios", NewExercise,  config);
            return new Promise((resolve, reject) => {
                if (res.status === 200) {
                    console.log(res.data)
                    state.Exercise.push(res.data);
                    resolve(200);
                } else {
                // Rechazar la promesa con un mensaje de error
                console.log(res)
                reject("Error en la petición HTTP");
                }
        });
        },
         async deleteExercise({ state }, deleteExercise) {
            const res = await axios.delete(base_url + "/ejercicios/" + deleteExercise._id,  config);
            return new Promise((resolve, reject) => {
                //const res = await axios.delete(base_url + "/ejercicios/" + deleteExercise._id,  config);
                if (res.status === 200) {
                    let DelExercise = state.Exercise.findIndex(exercise => exercise._id === deleteExercise._id)
                        if (DelExercise !== -1) {
                            state.Exercise.splice(DelExercise, 1);
                          }
                    resolve(200);
                } else {
                // Rechazar la promesa con un mensaje de error
                console.log(res)
                reject("Error en la petición HTTP");
                }
        });
        },
    }
}
