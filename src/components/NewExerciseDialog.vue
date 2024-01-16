<template >
    <div ref="MusculesDialog">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="600"
        
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Nombre del ejercicio*"
                    v-model="exercise.nombre"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    label="Musculo*"
                    required
                    v-model="musculoSelect"
                    :items= muscleName
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    label="Grupo Muscular *"
                    required
                    @change="auxFunc()"
                    v-model="exercise.grupoMuscularName"
                    :items= exerciseName
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Link*"
                    v-model="exercise.link"
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
              @click="submit"
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
  props:{accion2: Boolean, categorias: Array, musculos: Array},
    data() {
        return {
            dialog: false,
            exerciseName:[],
            musculoSelect: null,
            musculoID:null,
            exercise:{
              nombre:"",
             //musculoSelect: null,
              grupoMuscularName:"",
              link:"",
              _id:""
            },
            accion:""
        }
  },
  created(){
    //console.log(this.exercise)
  },
  mounted(){
    //console.log('refssss',this.$refs)
    //console.log('mounted',this.exercise)
  },
  watch:{
    musculoSelect(){
        let auxMuscle = this.musculos.find(e => e.nombre == this.musculoSelect);
        this.musculoID = auxMuscle._id;
        let auxCat = this.categorias.filter(e => e.musculo == auxMuscle._id);
        this.exerciseName = auxCat.map(obj => ({text:obj.nombre, value: obj}));
        //console.log(auxMuscle, this.exerciseName, this.musculoID)
    },
  },
  methods:{
    ...mapActions("exercises", ["addExercise","editExercise", "getMuscularGroups"]),
    ...mapMutations("exercises",["setCurrentExercise"]),
    auxFunc(){
      console.log('autocomplete', this.exercise.grupoMuscularName)
    },
     submit(){
      const grupoMuscularObj = this.MuscGroups.find(objeto => objeto._id == this.exercise.grupoMuscularName._id);
      const grupoMuscularId = grupoMuscularObj._id;
      if(this.accion === "add"){
          let exerciseApi = {nombre:this.exercise.nombre,musculo:this.musculoID, grupoMuscular:grupoMuscularId, link:this.exercise.link }
          this.addExercise(exerciseApi).then(codigoRespuesta => {
                if(codigoRespuesta == 200){
                Swal.fire('Agregado', this.exercise.nombre + ' agregado correctamente', 'success')
                    this.close()
                  }
            }).catch(error => {
                Swal.fire('Surgio un error', 'La operacion no pudo ser concretada', 'error')
                console.error(error);
                this.close()
            });
      } else if(this.accion === "edit"){
        let EditExerciseApi = {_id:this.exercise._id, nombre:this.exercise.nombre, musculo:this.musculoID, grupoMuscular:grupoMuscularId, link:this.exercise.link , grupoMuscularObj:grupoMuscularObj }
        console.log(EditExerciseApi)
        this.editExercise(EditExerciseApi).then(codigoRespuesta => {
              if(codigoRespuesta == 200){
              Swal.fire('Editado', this.exercise.nombre + ' editado correctamente', 'success')
                  this.close()
                }
          }).catch(error => {
              Swal.fire('Surgio un error', 'La operacion no pudo ser concretada', 'error')
              console.error(error);
              this.close()
          });
      }
        },
        close(){
          this.exercise={nombre:"", grupoMuscular:"", link:""}
          this.dialog = false
        },
        
  },
  computed:{
  ...mapState("exercises", ["MuscGroups"]),
        /* exerciseName(){
          const data = this.MuscGroups.map(obj => ({text:obj.nombre, value: obj.nombre}));
          return data
        }, */
        muscleName(){
          const data = this.musculos.map(obj => ({text:obj.nombre, value: obj.nombre}));
          return data
        },
        title(){
        //console.log('refs',this.accion2)
        if(this.accion2){
          return "Agregar Ejercicio"
        }else{
          return "Editar Ejercicio"
        }
      }

},

}

</script>

<style>

</style>