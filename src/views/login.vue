<template>
<v-app class="backColor">
    <v-snackbar color="white"  v-model="alert" timeout="3000" top>
        <v-row class="ma-0 pa-0">
            <v-icon color="#3a3a3b" dense>mdi-alert-circle-outline</v-icon>
            <p style="color: #3a3a3b" class="ma-0 pa-0 ml-3">Usuario o contraseña invalido</p>
        </v-row>
        <template v-slot:action="{ attrs }">
            <v-icon color="#3a3a3b" v-bind="attrs" @click="alert = false">mdi-close</v-icon>
        </template>
    </v-snackbar>
    <v-row align="center" justify="center" class="ma-0 pa-0">
        <v-card class="ma-0 pa-0 rounded-xl" height="100%" width="100%" max-width="450px" max-height="380px">
            <v-row align="center" justify="center" class="ma-0 pa-0 my-8">
                <img src="@/assets/Test.svg" height="120px" width="230px" />
            </v-row>
            <v-row align="center" justify="center" class="ma-0 pa-0">
                <v-col class="ma-0 pa-0" cols="9">
                    <v-text-field density="compact" v-model="email" class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense outlined hide-details="true" placeholder="Email" >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center" class="ma-0 pa-0 my-6">
                <v-col class="ma-0 pa-0" cols="9">
                    <v-text-field  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"  @click:append="show1 = !show1" @keyup.enter="login()" density="compact" v-model="pass" class="" color="#3a3a3b" background-color="#FFFFFF" single-line dense outlined hide-details="auto" placeholder="Password" >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row align="center" justify="center" class="ma-0 pa-0 my-6">
                <v-btn @click="login()" >Iniciar sesion</v-btn>
                <v-btn @click="register()" >Registro</v-btn>
            </v-row>
        </v-card>
    </v-row>
    <clientDialog :accion2="accion2" ref="clientDialog"></clientDialog>
</v-app>
</template>

<script>
/* import axios from 'axios'; */
import clientDialog from "@/components/NewClientDialog"
export default {
    name: 'login-view',
    components: {
        clientDialog
    },
    data(){
        return{
            email:'',
            pass:'',
            alert: false,
            show1: "",
        }
    },
    created(){
        this.$store.state.user = null;
    },
    methods:{
        register(){
            this.$refs.clientDialog.dialog = true;
        },

        login(){
            let user = {
                username: this.email,
                password: this.pass,
            }
            console.log(user)
            this.$store.dispatch("LOGIN", user)
            .then(response => {
                console.log(response)
                this.$router.push({ path: '/clientes'});
                this.$store.state.user = response.data
            }).catch( error => {
                console.log(`%cERROR`, 'color: red; font-weight: bold;', error);
                this.alert = true;
            });
        },
    }
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #002366;
  border-radius: 8px;
}
.backColor{
    background-color: #27B2FD;
}
</style>