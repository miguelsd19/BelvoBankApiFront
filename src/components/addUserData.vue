<template>
    <div ref="UserData">
    <v-row>
        <v-col>
            <v-form>
                <v-card class="ma-0 pa-0 my-4" width="100%" height="100%" elevation="1">
                    <v-row class="ma-0 pa-0" align="center" justify="center">
                        <v-card-title class="ma-0 pa-0 my-6">Datos generales</v-card-title>
                    </v-row>

                    <v-row class="pa-0 ma-0" justify="center">
                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Número de meso ciclo</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu1" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu1 = true"  @click:append="menu1 = true" v-model="InitialData.Mesociclo" label="Numero de meso ciclo" placeholder="Ej: Mesociclo 1" outlined clearable class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in MesocicloNumber" :key="index" @click="InitialData.Mesociclo=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Instrucciones 1</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu2" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu2 = true"  @click:append="menu2 = true" v-model="InitialData.Instrucciones1" label="Instrucciones 1" placeholder="Ej: Microciclo 1" outlined clearable class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in Instrucciones1Options" :key="index" @click="InitialData.Instrucciones1=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Instrucciones 2</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu3" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu3 = true"  @click:append="menu3 = true" v-model="InitialData.Instrucciones2" label="Instrucciones 2" placeholder="Ej: Microciclo 2" outlined clearable class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in Instrucciones2Options" :key="index" @click="InitialData.Instrucciones2=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Instrucciones 3</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu4" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu4 = true"  @click:append="menu4 = true" v-model="InitialData.Instrucciones3" label="Instrucciones 3" placeholder="Ej: Microciclo 3,4,5" outlined clearable class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in Instrucciones3Options" :key="index" @click="InitialData.Instrucciones3=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>


                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Instrucciones 4</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu41" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu41 = true"  @click:append="menu41 = true" v-model="InitialData.Instrucciones4" label="Instrucciones 4" placeholder="Ej: Microciclo 6" outlined clearable class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in Instrucciones4Options" :key="index" @click="InitialData.Instrucciones4=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>


                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Pasos en actividad fisica</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu5" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu5 = true"  @click:append="menu5 = true" v-model="InitialData.PasosAct" label="Pasos en actividad fisica" placeholder="Ej. 6,000 - 8,000" outlined clearable class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in PasosActOptions" :key="index" @click="InitialData.PasosAct=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>    
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Pasos en dias de descanso</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu6" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu6 = true"  @click:append="menu6 = true" v-model="InitialData.PasosRest" label="Pasos en dias de descanso" placeholder="Ej. 6,000 - 8,000" outlined clearable class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in PasosRestOptions" :key="index" @click="InitialData.PasosRest=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Tipo de cardio</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu7" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu7 = true"  @click:append="menu7 = true" v-model="InitialData.CardioType"  placeholder="Ej. Cardio Liss " label="Tipo de cardio" outlined  color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in CardioTypeOptions" :key="index" @click="InitialData.CardioType=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Duracion de cardio</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu8" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu8 = true"  @click:append="menu8 = true" v-model="InitialData.CardioDuration" label="Duracion de cardio" placeholder="Ej. 35 min " outlined  color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in CardioDurationOptions" :key="index" @click="InitialData.CardioDuration=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Ritmo</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu9" offset-y :close-on-content-click="true" transition="scale-transition" >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-row class="pa-0 ma-0" justify="center">
                                            <v-text-field @click:prepend="menu9 = true"  @click:append="menu9 = true" v-model="InitialData.CardioRitmo" label="Ritmo" placeholder="Ej. MANTENERSE EN 60%-80% " outlined clearable  class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                        </v-row>
                                    </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in CardioRitmo" :key="index" @click="InitialData.CardioRitmo=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Frecuencia Semanal</v-row>
                            <v-col cols="12"  class="pa-0 ma-0">
                                    <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu10" offset-y :close-on-content-click="true" transition="scale-transition" >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-row class="pa-0 ma-0" justify="center">
                                                <v-text-field @click:prepend="menu10 = true"  @click:append="menu10 = true" v-model="InitialData.CardioWeeklyFreq" label="Frecuencia Semanal" placeholder="Ej. 2 Dias" outlined clearable  class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder  v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                            </v-row>
                                        </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in CardioWeeklyFreqOptions" :key="index" @click="InitialData.CardioWeeklyFreq=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Opciones de cardio</v-row>
                                <v-col cols="12"  class="pa-0 ma-0">
                                    <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu11" offset-y :close-on-content-click="true" transition="scale-transition" >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-row class="pa-0 ma-0" justify="center">
                                                <v-text-field @click:prepend="menu11 = true"  @click:append="menu11 = true" v-model="InitialData.CardioOptions" label="Opciones de cardio" placeholder="Ej. Caminadora " outlined  color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder  v-bind="attrs" v-on="on" append-icon="mdi-chevron-down"/>
                                            </v-row>
                                        </template>
                                    <v-row class="ma-0 pa-0 ">
                                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                            <v-list-item v-for="(item, index) in CardioOptionsList" :key="index" @click="InitialData.CardioOptions=item; ">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-row>
                                </v-menu>
                            </v-col>
                        </v-col>



                        <v-col cols="auto">
                            <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" >Notas de Cardio</v-row>
                                <v-col cols="12"  class="pa-0 ma-0">
                                    <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu12" offset-y :close-on-content-click="true" transition="scale-transition" >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-row class="pa-0 ma-0" justify="center">
                                                <v-text-field v-model="InitialData.CardioNotes" label="Notas de cardio" placeholder="" outlined clearable  class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense hide-details="true" persistent-placeholder @click:append="menu12 = true" @click:prepend="menu12 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down" />
                                            </v-row>
                                        </template>
                                        <v-row class="ma-0 pa-0 ">
                                            <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                                                <v-list-item v-for="(item, index) in CardioNotesOptions" :key="index" @click="InitialData.CardioNotes=item; ">
                                                    <v-list-item-title>{{ item }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-row>
                                    </v-menu>
                                </v-col>
                        </v-col>


                    </v-row>
                </v-card>
            </v-form>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    data(){
        return{
            InitialData: {
                Mesociclo: "",
                Instrucciones1:"",
                Instrucciones2:"",
                Instrucciones3:"",
                Instrucciones4:"",
                PasosAct:"",
                PasosRest:"",
                CardioType:"",
                CardioDuration:"",
                CardioRitmo:"",
                CardioWeeklyFreq:"",
                CardioOptions:"",
                CardioNotes:""
            },
            MesocicloNumber: ["1","2","3", "4", "5","6","7","8", "9", "10", "11", "12"],
            Instrucciones1Options: ["MICROCICLO 1 (SEMANA 1): COMIENCE LA SEMANA DE ENTRENAMIENTO FAMILIARIZÁNDOSE CON LOS EJERCICIOS Y HACIÉNDONOS SABER TODAS LAS DUDAS POSIBLES DEL ENTRENAMIENTO.",
                                    "MICROCICLO 1 (SEMANA 1): FAMLIARIZARSE CON LOS NUEVOS EJERCICIOS Y CARGAS A UTILIZAR EN ESTOS EJERCICIOS, ASI COMO A LOS CAMBIOS QUE SE LE HAYAN REALIZADO"],
            Instrucciones2Options: ["MICROCICLO 2 (SEMANA 2): PARA SABER CUANTAS REPETICONES EN REALIDAD DEJA EN RESERVA DEBERA CONOCER EL FALLO MUSCULAR. PARA CONOCER Y SENTIR CUAL ES EL FALLO MUSCULAR, SE RECOMIENDA LLEVAR LA ULTIMA SERIE DE CADA EJERCICIO AL FALLO VERDADERO, EL FALLO MUSCULAR ES CUANDO YA NO LE ES POSIBLE COMPLETAR EL MOVIMIENTO COMPLETO. SOLO EN EJERCICIOS DONDE SE PAUTE UN RIR 0",
                                    "MICROCICLO 2 (SEMANA 2):  EN EJERCICIOS QUE YA HABÍA REALIZADO VOLVER A INCORPORARCE A LOS A LOS PESOS DE LA SEMANA 5 DEL MESO CICLO ANTERIOR Y EN LOS NUEVOS MEDIR LAS REPETICIONES EN RESERVA QUE SE ESTARÁN TRABAJANDO EN MESO CICLOS POSTERIORES "],
            Instrucciones3Options: ["MICROCICLO 3,4 Y 5 (SEMANA 3, 4 Y 5): EN TODOS LOS EJERCICIOS EN EL ORDEN SEÑALADO PROGRESAR EN RIR, REPS, PESO, TUT, MEJORA DE LA TECNICA…"],
            Instrucciones4Options: ["MICRO CICLO 6 (SEMANA 6). SEMANA DE DESCARGA: (CONTÁCTESE CON NOSOTROS PARA PROGRAMAR O NO LA SEMANA DE DESCARGA)"],
            PasosActOptions: ["6,000 – 8,000", "9,000 – 11,000", "12,000 – 14,000", "15,000 - 20,000"],
            PasosRestOptions: ["8,000 - 10,000", "9,000 – 11,000", "12,000 – 14,000", "15,000-20,000"],
            CardioTypeOptions: ['CARDIO LISS', 'CARDIO HIIT'],
            CardioDurationOptions: ["15 MIN",  "20 MIN",  "25 MIN", "30 MIN", "35 MIN", "40 MIN", "45 MIN", "50 MIN", "60 MIN"],
            CardioRitmo: ["MANTENERSE EN 60% - 80% FCM (FRECIENCIA CARDIACA)", "MANTENERSE EN 60% - 90%\nFCM (FRECUENCIA CARDÍACA MÁXIMA)"],
            CardioWeeklyFreqOptions: ["1 Dia","2 Dias","3 Dias", "4 Dias", "5 Dias","6 Dias","7 Dias"],
            CardioOptionsList: ["CAMINADORA", "ELÍPTICA", "ESCALADORA", "BICICLETA ESTÁTICA", "REMO", "BICICLETA DE AIRE", "CAMINATA AL AIRE LIBRE"],
            CardioNotesOptions: ["EN AYUNAS", "DESPUES DEL ENTRENAMIENTO DE MUSCULACION", "EN CUALQUIER MOMENTO DEL DIA"],
            
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false,
            menu5: false,
            menu6: false,
            menu7: false,
            menu8: false,
            menu9: false,
            menu10: false,
            menu11: false,
            menu12: false,
            menu41: false,
        }
    },

    methods:{
        created(){
            this.InitialData = {
                Mesociclo: "",
                Instrucciones1:"",
                Instrucciones2:"",
                Instrucciones3:"",
                PasosAct:"",
                PasosRest:"",
                CardioType:"",
                CardioDuration:"",
                CardioRitmo:"",
                CardioWeeklyFreq:"",
                CardioOptions:"",
                CardioNotes:""
            }
        }
    }

}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #002366;
  border-radius: 8px;
}
.title{
    font-family: 'DM Sans' !important;
    font-style: normal;
    font-weight: 400;
    font-size: 18px !important;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #002366;
}
</style>