<template>
<v-row class="ma-0 pa-0" justify="center" >
    <v-container>
        <h1>Accounts List</h1>
    <v-data-table
        class="elevation-1"
        :search="search"
        :items="Exercise"
        :headers="headers"
        :no-data-text= "'No hay datos disponibles'"
        :footer-props="{
        itemsPerPageOptions:[5,10,15,-1],
        itemsPerPageText: 'accounts for page',
        itemsPerPageAllText: 'All',
        }">
    <template v-slot:[`item.balance`]="{ item }">
      {{ item.balance.current }}
    </template>
    
    <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon  class="detailIcon" @click="seeTransactions(item)">
                        mdi-eye
                    </v-icon>
            </v-btn>
        </template>
        <span>View transactions</span>

    </v-tooltip>
    </template>
      </v-data-table>           
      <MusculesDialog v-if="musculos.length > 0 && categorias.length > 0" :musculos="musculos" :categorias="categorias" :accion2="accion2" ref="MusculesDialog"></MusculesDialog>
    </v-container>
</v-row>
</template>

<script>
import MusculesDialog from "@/components/NewExerciseDialog"
import {mapActions,mapMutations,mapState} from 'vuex';
import Swal from 'sweetalert2';
//import {generatePDF} from '@/store/modules/pdf'
export default {
    name: 'training-view',
    components: {
        MusculesDialog
    },
    data() {
        return {
            musculos: [],
            categorias:[],
            accion2: false,
            search: "",
            headers: [
            {text:"Currency",value: "currency"},
            {text:"Account type",value: "type"},
            {text:"Public Id",value: "public_identification_value"},
            {text:"Balance",value: "balance"},
            {text:"Actions",value: "actions"},
            ],
        }
  },

  methods:{
    ...mapActions("exercises", ["getExercise", "deleteExercise", "getMuscularGroups"]),
    ...mapMutations("exercises",["setAccountId", "setLinkId"]),

    OpenMuscleDialog() {
        this.accion2 = true;
                this.$refs.MusculesDialog.dialog = true;
                this.$refs.MusculesDialog.accion = "add"
            },
    seeTransactions(item){
        this.$router.push({ path: '/Transactions'})
        this.setAccountId(item.id)
        this.setLinkId(item.link)
    },
    deleteItem(item){
        Swal.fire({
            title: 'Confirma para eliminar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true
            }).then((result) => {
            if (result.isConfirmed) {
                this.deleteExercise(item).then(codigoRespuesta => {
                    if(codigoRespuesta === 200){
                    Swal.fire('Eliminado', item.nombre + ' se eliminó correctamente', 'success')}
                }).catch(error => {
                    Swal.fire('Surgio un error', 'La operacion no pudo ser concretada', 'error')
                console.error(error);
                });
               
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss ===  Swal.DismissReason.cancel
            ) {
                Swal.fire('Cancelado', 'Se canceló la operacion', 'error')
            }
            })
    }
  },
  computed:{
...mapState("exercises", ["Exercise"]),
},
async created(){
   await this.getExercise(this.$store.state.bankName);

}
}

</script>

<style>

</style>