<template>
<div>
    <v-snackbar color="#C62828"  v-model="$store.state.excError" timeout="5000" top>
        <v-row class="ma-0 pa-0">
            <v-icon color="#EEEEEE" dense>mdi-alert-circle-outline</v-icon>
            <p style="color: #EEEEEE" class="ma-0 pa-0 ml-3">Ejercicio Invalido</p>
        </v-row>
        <template v-slot:action="{ attrs }">
            <v-icon color="#EEEEEE" v-bind="attrs" @click="$store.state.excError = false">mdi-close</v-icon>
        </template>
    </v-snackbar>
    <v-row class="ml-4 v-card__title">Details of {{clientName}}</v-row>
    <template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src=this.bankData.logo
    >
    </v-img>

    <v-card-subtitle class="pb-0">
      Type: {{ this.bankData.type }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Code: {{ this.bankData.code }}</div>

      <div>Country: {{ this.bankData.country_code }}</div>

      <div>website: {{ this.bankData.website }}</div>

      <div>Status: {{ this.bankData.status }}</div>

      <div>Resources: {{ this.bankData.resources }}</div>
    </v-card-text>
  </v-card>
</template> 
</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'home-view',
    data(){
        return{
            clientName:'',
            bankData: null,
            selectedFile: null,
            loading: false
        }
    },
    created(){
        this.$store.state.sessions = [];

        this.$store.dispatch("GET_CLIENT", {url:'banks/' + this.$store.state.clientID + '/'})
        .then(response => { 
            this.clientName = response.data.display_name;
            this.bankData = response.data;

            console.log(this.$store.state.sessions)
        }).catch( error => { 
            console.log(`%cERROR`, 'color: red; font-weight: bold;', error);
        });
    },
    methods:{
        ...mapActions("clients", ["editTraining"]),
    },
}
</script>

<style scoped>
</style>