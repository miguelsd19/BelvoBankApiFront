<template>
<v-row class="ma-0 pa-0" align="center" justify="start">
    <v-col cols="1.5" align-self="center" class="ma-0 pa-0 px-2 my-3">
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">Musculo
        </v-row>
        <v-row class="pa-0 ma-0" justify="center">
            <v-col cols="12"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"  v-model="menu1" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="musculoSelect.nombre" dense outlined hide-details="true" placeholder="Seleccionar" persistent-placeholder  @click:prepend="menu1 = true" readonly @click:append="menu1 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in musculos" :key="index" @click="musculoSelect = item;">
                                <v-list-item-title>{{ item.nombre }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="2" align-self="center" class="ma-0 pa-0 px-2">
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">Categoria
        </v-row>
        <v-row class="pa-0 ma-0" justify="center">
            <v-col cols="12"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu2" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="catSelect.nombre" dense outlined hide-details="true" placeholder="Seleccionar" persistent-placeholder  @click:prepend="menu2 = true" readonly @click:append="menu2 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in filteredCat" :key="index" @click="catSelect=item; ">
                                <v-list-item-title>{{ item.nombre }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="2" align-self="center" class="ma-0 pa-0 px-2">
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">Ejercicio
        </v-row>
        <v-row class="pa-0 ma-0" justify="center">
            <v-col cols="12"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu3" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field :error="filteredExc.length === 0 && musculoSelect.nombre !== '' && catSelect.nombre.length !== 0  ? true : false" class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="exerSelect.nombre" dense outlined hide-details="true" :placeholder="filteredExc.length > 0 ? 'Seleccionar' : 'Ejercicios no disponibles'" persistent-placeholder  @click:prepend="menu3 = true" readonly @click:append="menu3 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in filteredExc" :key="index" @click="exerSelect=item; ">
                                <v-list-item-title>{{ item.nombre }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="1" align-self="center" class="ma-0 pa-0 px-2">
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">Notas
        </v-row>
        <v-row class="pa-0 ma-0" justify="start">
            <v-col cols="12"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu4" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="notesSelect" dense outlined hide-details="true" placeholder="Seleccionar" persistent-placeholder  @click:prepend="menu4 = true"  @click:append="menu4 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in notes" :key="index" @click="notesSelect=item; ">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="1" align-self="center" class="ma-0 pa-0 px-2" >
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">Descanso
        </v-row>
        <v-row class="pa-0 ma-0" justify="center">
            <v-col cols="12"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu5" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="descansoSelect" dense outlined hide-details="true" placeholder="0 - 0" persistent-placeholder  @click:prepend="menu5 = true"  @click:append="menu5 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in descansos" :key="index" @click="descansoSelect=item; ">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="1" align-self="center" class="ma-0 pa-0 px-2">
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">Series
        </v-row>
        <v-row class="pa-0 ma-0" justify="start">
            <v-col cols="10"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu6" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="seriesSelect" dense outlined hide-details="true" placeholder="0 - 0" persistent-placeholder  @click:prepend="menu6 = true"  @click:append="menu6 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in series" :key="index" @click="seriesSelect=item; ">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="1" align-self="center" class="ma-0 pa-0 px-2">
        <v-row class="pa-0 ma-0 mb-2 title" justify="center" v-if="excIndex == 0">Repeticiones
        </v-row>
        <v-row class="pa-0 ma-0" justify="start">
            <v-col cols="10"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu7" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="repSelect" dense outlined hide-details="true" placeholder="0 - 0" persistent-placeholder  @click:prepend="menu7 = true"  @click:append="menu7 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in repeticiones" :key="index" @click="repSelect=item; ">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="1" align-self="center" class="ma-0 pa-0 px-2">
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">RIR
        </v-row>
        <v-row class="pa-0 ma-0" justify="start">
            <v-col cols="10"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu8" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="rirSelect" dense outlined hide-details="true" placeholder="0 - 0" persistent-placeholder  @click:prepend="menu8 = true"  @click:append="menu8 = true" v-bind="attrs" v-on="on" append-icon="mdi-chevron-down">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in rirs" :key="index" @click="rirSelect=item; ">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="1" align-self="center" class="ma-0 pa-0 px-2">
        <v-row class="pa-0 ma-0 mb-2 ml-1 title" justify="start" v-if="excIndex == 0">Tipo
        </v-row>
        <v-row class="pa-0 ma-0" justify="center">
            <v-col cols="12"  class="pa-0 ma-0">
                <v-menu class="ma-0 pa-0 " max-height="300px"   v-model="menu9" offset-y :close-on-content-click="true" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-row class="ma-0 pa-0 ">
                            <v-text-field class="" color="#3a3a3b" background-color="#FFFFFF" single-line v-model="typeSelect" dense outlined hide-details="true" placeholder="Simple" persistent-placeholder  @click:prepend="menu9 = true"  @click:append="typeSelect == null ? menu9 = true : typeSelect = null" v-bind="attrs" v-on="on" :append-icon="typeSelect == null ? 'mdi-chevron-down' : 'mdi-close'">
                            </v-text-field>
                        </v-row>
                    </template>
                    <v-row class="ma-0 pa-0 ">
                        <v-list class="pa-0 ma-0" style="width: -webkit-fill-available;">
                            <v-list-item v-for="(item, index) in types" :key="index" @click="typeSelect=item; ">
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-menu>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="auto" align-self="center" class="ma-0 pa-0 ">
        <v-row class="pa-0 ma-0  " :class="excIndex == 0 ? 'pt-6' : ''" justify="center" align="end">
            <v-btn icon @click="deleteExc()">
            <v-icon class="detailIcon" >
                mdi-trash-can
            </v-icon>
        </v-btn>
        </v-row>
    </v-col>
</v-row>
</template>

<script>
export default {
    props:{musculos: Array, categorias: Array, ejercicios: Array, sessionIndex: Number, excIndex: Number, id: String, excersise: Object, nomExc: String, old:Boolean},
    data(){
        return{
            excAux: "",
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false,
            menu5: false,
            menu6: false,
            menu7: false,
            menu8: false,
            menu9: false,
            musculoSelect: {nombre:''},
            catSelect: {nombre:''},
            exerSelect: {nombre:''},
            notesSelect:'',
            descansoSelect:'',
            seriesSelect:'',
            repSelect:'',
            rirSelect:'',
            typeSelect:null,
            notes:[
                '1 SEG ARRIBA',
                '1 SEG ABAJO',
                '1 SEG EN CONTRACCION',
                'PIES LO MAS A BAJO DE LA PLATAFORMA, RODILLA SOBRE PASA LA PUNTA DEL PIE',
                'RODILLA SOBRE PASA LA PUNTA DEL PIE',
                'NO ENCORVARSE',
                'NO DESPEGAR LA CADERA DEL ASIENTO ',
                'PUNTAS DE LOS PIES LIGERAMENTE ABIERTAS',
                'NO DESPEGAR LA PELVIS DEL BANCO',
                'NO MOVER EL HOMBRO, SOLO FLEXIONAR EL CODO',
                'NO MOVER EL HOMBRO, SOLO EXTENDER EL CODO',
                'CODOS EN SOBRE PASAN EL TORSO ',
                'CODO EN DIRECCION DE LA CADERA',
                'NO CHOCAR LAS MANCUERNAS',
                'NO ARQUEAR LA ESPALDA',
                'INCLINAR EL TORSO HACIA ENFRENTE',
                'NO FLEXIONAR LA CADERA, PIERNA EXTENDIDA COMPLETAMENTE ',
                'MANTENER LOS BRAZOS EXTENDIDOS',
                'PONER LA MANO A LA ALTURA DE LA POLEA',
                'JUNTAR EL BICEPS CON EL PECHO',
                'JUNTAR EL ANTEBRAZO CON EL PECHO',
                'PIES LO MAS ARRIBA DE LA PLATAFORMA',
                'SOLO EXTENDER EL CODO ',
                'SOLO FLEXIONAR EL CODO',
                'INCLINAR LIGERAMENTE EL TORAX HACIA ATRÁS',
                'EN LA ULTIMA SERIE AGREGAR UN REST-PAUSE',
                'EN LA ULTIMA SERIE AGREGAR UN DROP-SET',
                'TOP-SET 95%',
                'BACK-OFF SET 80%',
                'SERIE PIRAMIDAL',
                'SERIE PIRAMIDAL INVERSA ',
                'SERIE CLUSTER ',
            ],
            descansos:[
                '1-2 MIN',
                '2-3 MIN',
                '3-4 MIN'
            ],
            series:[
                1,2,3,4,5,6,7,8,9,10
            ],
            repeticiones:[
                '1-3',
                '3-5',
                '6-8',
                '8-10',
                '10-12',
                '12-16',
                '15-20',
                '20-30',
            ],
            rirs:[
                '1-0',
                '2-0',
                '3-0',
                '4-0',
            ],
            types:[
                'Biserie 1',
                'Biserie 2',
                'Triserie 1',
                'Triserie 2',
            ],
            filteredCat:[],
            filteredExc:[],
            defaultExc:{
                musculo: '',
                categoria: '',
                ejercicio: '',
                notas: '',
                descanso: '',
                series: '',
                repeticiones: '',
                rir: '',
                url:'',
            },
        }
    },
    beforeCreate(){
        /* console.log(this.ejercicios) */
    },
    created(){
        /* this.excAux = this.excersise.ejercicio */
        /* this.musculoSelect.nombre = this.excersise.musculo;
        this.catSelect.nombre = this.excersise.categoria;
        this.exerSelect.nombre = this.excersise.ejercicio; */
        if(this.old){
            this.notesSelect = this.excersise.notas;
            this.descansoSelect = this.excersise.descanso;
            this.seriesSelect = this.excersise.series/* .toString() */;
            this.repSelect = this.excersise.repeticiones;
            this.rirSelect = this.excersise.rir;
            /* this.ejercicios.forEach(e=> {console.log(typeof(e.nombre) == typeof(this.nomExc), e.nombre == this.nomExc)}) */
            let aux = this.ejercicios.find(e => e.nombre == this.nomExc);
            let aux2 = this.musculos.find(m => m._id == aux.grupoMuscular.musculo);
            this.musculoSelect = aux2;
            this.catSelect = aux.grupoMuscular;
            this.exerSelect = aux;
            this.typeSelect = this.excersise.tipo
        }else{
            this.descansoSelect = '2-3 MIN';
            this.rirSelect = '2-0';
        }
    },
    mounted(){
        /* let aux = this.ejercicios.find(e => e.nombre == this.excAux) */
        /* console.log(typeof(this.excersise.ejercicio))
        this.notesSelect = this.excersise.notas; */
    },
    beforeUpdate(){
    },
    watch:{
        musculoSelect(){
            if(!this.old)
            this.catSelect = {nombre:''};
            this.filteredCat = this.categorias.filter(e => e.musculo == this.musculoSelect._id);
            console.log('filttered cat', this.filteredCat)
        },
        catSelect(){
            if(!this.old)
            this.exerSelect = {nombre:''};
            console.log(this.catSelect)
            this.filteredExc = this.ejercicios.filter(e => e.grupoMuscular._id == this.catSelect._id/* "6433456f658d4a664a886543" */)
            console.log('filttered exersice', this.filteredExc)
        },
        exerSelect(){
            if(this.exerSelect.nombre==''){
                this.$store.state.excError2= true
            }else{
                this.$store.state.excError2= false
            }
            this.$store.state.sessions[this.sessionIndex][this.excIndex].musculo = this.musculoSelect.nombre;
            this.$store.state.sessions[this.sessionIndex][this.excIndex].categoria = this.catSelect.nombre;
            this.$store.state.sessions[this.sessionIndex][this.excIndex].ejercicio = this.exerSelect.nombre;
            this.$store.state.sessions[this.sessionIndex][this.excIndex].url = this.exerSelect.link;
        },
        notesSelect(){
            this.$store.state.sessions[this.sessionIndex][this.excIndex].notas = this.notesSelect;
        },
        descansoSelect(){
            this.$store.state.sessions[this.sessionIndex][this.excIndex].descanso = this.descansoSelect;
        },
        seriesSelect(){
            this.$store.state.sessions[this.sessionIndex][this.excIndex].series = this.seriesSelect;
        },
        repSelect(){
            this.$store.state.sessions[this.sessionIndex][this.excIndex].repeticiones = this.repSelect;
        },
        rirSelect(){
            this.$store.state.sessions[this.sessionIndex][this.excIndex].rir = this.rirSelect;
        },
        typeSelect(){
            this.$store.state.sessions[this.sessionIndex][this.excIndex].tipo = this.typeSelect;
            let count = 0;
            this.$store.state.sessions[this.sessionIndex].forEach(obj => {
                if(obj.tipo != undefined){
                if (obj.tipo.includes(this.typeSelect)) {
                    count++;
                }/* else{
                    count = 0;
                } */}
            });
            if(this.typeSelect != undefined)
            if( (this.typeSelect.includes('Biserie') && count > 2) || (this.typeSelect.includes('Triserie') && count > 3) ){
                /* this.$store.state.excError= true */
                this.$store.state.excError2= true
            }
        },
    },
    computed:{
    },
    methods:{
        deleteExc(){
            this.$store.state.sessions[this.sessionIndex].splice(this.excIndex, 1);
            /* console.log(this.$store.state.sessions) */
        }
    },
}
</script>

<style  scoped>
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
.v-text-field--outlined.error--text >>> fieldset {
  border-color: #660000;
  border-radius: 8px;
}
</style>