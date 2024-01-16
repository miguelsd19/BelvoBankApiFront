<template>
<v-row class="ma-0 pa-0" justify="center" >
    <v-container>
        <h1 class="mb-2">Banks List</h1>
    <v-data-table
        class="elevation-1"
        :search="search"
        :items="clients"
        :headers="headers"
        :no-data-text= "'No hay datos disponibles'"
        :footer-props="{
        itemsPerPageOptions:[5,10,15,-1],
        itemsPerPageText: 'Institutions for page',
        itemsPerPageAllText: 'All',
        }">

    <template v-slot:[`item.link`]="{ item }">
      <a :href="item.link" target="_blank">{{ item.link }}</a>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon  class="detailIcon" @click="viewTraining(item.id)">
                        mdi-eye
                    </v-icon>
            </v-btn>
        </template>
        <span>Details</span>
    </v-tooltip>
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon  class="detailIcon" @click="EditOpenClientDialog(item)">
                        mdi-account
                    </v-icon>
            </v-btn>
        </template>
        <span>Accounts</span>
    </v-tooltip>
    </template>
      </v-data-table>           
      <clientDialog :accion2="accion2" ref="clientDialog"></clientDialog>
    </v-container>
</v-row>
</template>

<script>
import clientDialog from "@/components/NewClientDialog"
import {mapActions,mapMutations,mapState} from 'vuex';
import Swal from 'sweetalert2';
export default {
    name: 'clients-view',
    components: {
        clientDialog
    },
    data() {
        return {
            accion2: false,
            search: "",
            headers: [
            {text:"Bank",value: "display_name"},
            {text:"Country",value: "country_code"},
            {text:"Status",value: "status"},
            {text:"Type",value: "type"},
            {text:"Actions",value: "actions",sortable:false},
            ],
        }
  },
  methods:{
    ...mapActions("clients", ["getClients", "deleteClient"/* , "getMuscularGroups" */]),
    ...mapMutations("clients"),

    viewTraining(id){
        this.$store.state.clientID = id;
        this.$router.push({ path: '/home'})
    },
    OpenClientDialog() {
        this.accion2 = true;
                this.$refs.clientDialog.dialog = true;
                this.$refs.clientDialog.accion = "add"
            },
    EditOpenClientDialog(item) {
        this.$router.push({ path: '/training'})
        this.$store.state.bankName = item.name;
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
                this.deleteClient(item).then(codigoRespuesta => {
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
...mapState("clients", ["clients"])
},
async created(){
   await this.getClients();
},
mounted(){
    
}
}
</script>

<style>

</style>