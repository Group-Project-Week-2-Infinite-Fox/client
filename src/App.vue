<template>
  <div class="h-100">

    <Nav></Nav>
    <Upload></Upload>
    <Login @login-status="loginstatus"></Login>
  </div>
</template>

<script>
import Login from './components/Login'
import Nav from './components/Nav'
//----
import Upload from './components/Upload'
//---

export default {
  data(){
    return{
      message : "Hello World!",
      isLogin : "For child",
      iniArrays : [1,2,3,4]
    }
  },
  components : {
    Login,
    Nav,
    Upload
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