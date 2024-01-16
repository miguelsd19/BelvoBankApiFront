<template>
    <v-row class="ma-0 pa-0" justify="center" >
        <v-container>
            <h1>Transactions List</h1>
        <v-data-table
            class="elevation-1"
            :search="search"
            :items="Transactions"
            :headers="headers"
            :no-data-text= "'No hay datos disponibles'"
            :footer-props="{
            itemsPerPageOptions:[5,10,15,-1],
            itemsPerPageText: 'accounts for page',
            itemsPerPageAllText: 'All',
            }">

            <template v-slot:[`item.merchant`]="{ item }">
                {{ item.merchant.name }}
            </template>
        
          </v-data-table>           
        </v-container>
    </v-row>
    </template>
    
    <script>
    import {mapActions,mapMutations,mapState} from 'vuex';
    export default {
        name: 'training-view',

        data() {
            return {
                musculos: [],
                categorias:[],
                accion2: false,
                search: "",
                headers: [
                {text:"Category",value: "category"},
                {text:"Type",value: "type"},
                {text:"Amount",value: "amount"},
                {text:"status",value: "status"},
                {text:"Currency",value: "currency"},
                {text:"Place",value: "merchant"},
                ],
            }
      },
    
      methods:{
        ...mapActions("exercises", ["getExercise", "getTransactions", "getMuscularGroups"]),
        ...mapMutations("exercises",["setCurrentExercise"]),
       
      },
      computed:{
    ...mapState("exercises", ["Transactions"]),
    },
    async created(){
       await this.getTransactions();
    
    }
    }
    
    </script>
    
    <style>
    
    </style>