<template>
  <div class="h-100">

    <Login @login-status="loginstatus"></Login>
    
  </div>
</template>

<script>
import Login from './components/Login'

export default {
  data(){
    return{
      message : "Hello World!",
      isLogin : "For child",
      iniArrays : [1,2,3,4]
    }
  },
  components : {
    Login
  },
  methods:{
    loginstatus(loginstatus){
      console.log(loginstatus + " Ini pesan dari anak, diterima bapak, lho!");
    }
  }
}
</script>

<style>

</style>