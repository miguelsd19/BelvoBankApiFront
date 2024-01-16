<template>
<div>
    <v-card v-if="ejercicios.length > 0" class="ma-0 pa-0 my-4" width="100%" height="100%" elevation="1">
        <v-row class="ma-0 pa-0" align="center" justify="center">
            <v-card-title class="ma-0 pa-0 my-6">Sesion {{sessionIndex + 1}}</v-card-title>
        </v-row>
        <!-- <addExcersise v-for="(excersise, index) in $store.state.sessions[sessionIndex]"  :key="excersise.id" :id="excersise.id" :musculos="musculos" :categorias="categorias" :ejercicios="ejercicios" :sessionIndex="sessionIndex" :excIndex="index" @changeMuscle="changeMuscle($event)" @changeCat="changeCat($event)"/> -->
        <addExcersise v-for="(excersise, index) in session" :old="excersise.hasOwnProperty('_id') ? true : false" :excersise="excersise" :nomExc="excersise.ejercicio"  :key="excersise.id" :id="excersise.id" :musculos="musculos" :categorias="categorias" :ejercicios="ejercicios" :sessionIndex="sessionIndex" :excIndex="index" @changeMuscle="changeMuscle($event)" @changeCat="changeCat($event)"/>
        <v-row class="ma-0 pa-0" align="center" justify="center">
            <v-btn class="my-4" color="transparent" elevation="0" rounded @click="addExcersise()"><v-icon icon="md:info">mdi-plus-circle-outline</v-icon>Agregar ejercicio</v-btn>
        </v-row>
    </v-card>
</div>
</template>

<script>
import addExcersise from './addExcersise.vue';
export default {
    components: {addExcersise},
    props:{musculos: Array, categorias: Array, ejercicios: Array, sessionIndex: Number, session: Array},
    data(){
        return{
            /* filteredCat:[],
            filteredExc:[], */
            /* uuid:null, */
        }
    },
    methods:{
        /* changeMuscle(musculo){
            this.filteredCat = this.categorias.filter(e => e.musculo == musculo._id);
        },
        changeCat(ejercicio){
            this.filteredExc = this.ejercicios.filter(e => e.grupoMuscular._id == ejercicio._id)
        }, */
        addExcersise(){
            this.$store.state.sessions[this.sessionIndex].push({
                id: this.generateKey(),
                musculo: '',
                categoria: '',
                ejercicio: '',
                notas: '',
                descanso: '',
                series: '',
                repeticiones: '',
                rir: '',
                url:'',
            })
            /* this.uuid = crypto.randomUUID(); */
        },
        generateKey(){
            return crypto.randomUUID()
        },
    },
}
</script>

<style  scoped>

</style>