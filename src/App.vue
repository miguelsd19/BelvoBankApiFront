<template>
  <v-app>
    <v-main>
      <Login v-if="$store.state.user == null"/>
      <v-app v-else>
        <layout-header />
        <router-view class="mx-10 mt-10"/>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
import Login from './views/login.vue'
import LayoutHeader from './components/layoutHeader.vue';
export default {
  name: 'App',
  components:{Login, LayoutHeader},

  data: () => ({
    //
  }),
  created(){
    if(this.$store.state.user == null){
      this.$router.push({ path: '/'});
    }
  },
};
</script>
