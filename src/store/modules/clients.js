import axios from "axios";

const base_url= "https://belvoapiproject.onrender.com"
const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

export default{
    namespaced: true,
    state: {
        clients: [],
        /* currentExercise: [], */
        /* MuscGroups:[] */
    },
    mutations: {
        setExercise(state, payload) {
            state.clients = payload;
        },
        /* setCurrentExercise(state, payload) {
            state.currentExercise = payload;
        }, */
        /* setMuscGroups(state, payload) {
            state.MuscGroups = payload;
        } */
    },

    actions: {

        async getClients({ commit, state }) {
            try {
                if (state.clients.length === 0) {
                    const res = await axios.get(base_url + "/banks");
                    commit('setExercise', res.data.results);
                }
            } catch (error) {
                console.error(error)
            }
        },

        async editClient({state, commit}, editClient){
            /* let EditExerciseApi = {}; */
            /* if(editClient.hasOwnProperty('entrenamiento')){ */
                /* EditExerciseApi = {_id:editClient._id, nombre:editClient.nombre, telefono:editClient.telefono, edad:editClient.edad, peso:editClient.peso , entrenamiento: editClient.entrenamiento  } */
            /* }else{ */
            let EditExerciseApi = {_id:editClient._id, nombre:editClient.nombre, telefono:editClient.telefono, edad:editClient.edad, peso:editClient.peso  }
            /* } */
            
            const res =  await axios.put(base_url + "/clientes/" + editClient._id , EditExerciseApi,  config);
            return new Promise((resolve, reject) => {
                if (res.status === 200) {
                    let EditExerciseLocal = {_id:editClient._id, nombre:editClient.nombre, telefono:editClient.telefono, edad:editClient.edad, peso:editClient.peso }
                    commit("setExercise", state.clients.filter(exercise => exercise._id !== editClient._id))
                    state.clients.push(EditExerciseLocal);
                    resolve(200);
                } else {
                    // Rechazar la promesa con un mensaje de error
                    console.log(res)
                    reject("Error en la petición HTTP");
                }
        });
        },

        async editTraining({state, commit}, editClient){

            console.log( state, commit)
            const res =  await axios.put(base_url + "/entrenamientos/" + editClient.id , editClient.entrenamiento,  config);
            return new Promise((resolve, reject) => {
                if (res.status === 200) {
                    resolve(200);
                } else {
                    // Rechazar la promesa con un mensaje de error
                    console.log(res)
                    reject("Error en la petición HTTP");
                }
        });
        },

        async addClient(_, NewClient) {
            let user = {email: NewClient.email, passwordRaw: NewClient.password}
            return new Promise((resolve, reject) => {
                axios.post(base_url + "/auth/", user, config)
                    .then(res2 => {
                        if (res2.status === 201) {
                            resolve(200);
                        } else {
                            console.log(res2);
                            reject("Error en la petición HTTP");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        reject("Error en la petición HTTP");
                    });
            });
        },
         async deleteClient({ state }, deleteClient) {
            const res = await axios.delete(base_url + "/clientes/" + deleteClient._id,  config);
            return new Promise((resolve, reject) => {
                //const res = await axios.delete(base_url + "/clientes/" + deleteClient._id,  config);
                if (res.status === 200) {
                    let DelExercise = state.clients.findIndex(exercise => exercise._id === deleteClient._id)
                        if (DelExercise !== -1) {
                            state.clients.splice(DelExercise, 1);
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