<template >
    <div ref="clientDialog">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="600"
        
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Registro</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Correo*"
                    v-model="user.email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Contraseña*"
                    v-model="user.password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*Indica que es requerido</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="close"
            >
              Cerrar
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="submit()"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</div>
</template>

<script>
import {mapActions,mapMutations,mapState} from 'vuex';
import Swal from 'sweetalert2';
export default {
  props:{accion2: Boolean},
    data() {
        return {
            dialog: false,
            user:{
              email:"",
              password:"",
            },
        }
  },
  created(){
  },
  methods:{
    ...mapActions("clients", ["addClient","editClient"]),
    ...mapMutations("clients"),
     submit(){
          this.addClient(this.user).then(codigoRespuesta => {
                if(codigoRespuesta == 200){
                Swal.fire('Agregado', this.client.nombre + ' agregado correctamente', 'success')
                    this.close()
                  }
            }).catch(error => {
                Swal.fire('Surgio un error', 'La operacion no pudo ser concretada', 'error')
                console.error(error);
                this.close()
            });
        },

        close(){
          this.client={nombre:"", grupoMuscular:"", link:""}
          this.dialog = false
        },
        
  },
  computed:{
  ...mapState("clients"),
  title(){
    //console.log('refs',this.accion2)
    if(this.accion2){
      return "Agregar Cliente"
    }else{
      return "Editar Cliente"
    }
  }

},

}

</script>

<style>

</style>