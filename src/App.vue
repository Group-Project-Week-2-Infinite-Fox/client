<template>
  <div class="h-100">

    <Nav></Nav>
    <!-- <Login @login-status="loginstatus"></Login> -->
    <!-- <Register></Register> -->

    <!-- Body of content -->
    <div class="container" style="margin-top:4.7rem">
      <div class="row" v-for="(imageDummy,index) in imageDummys" :key="index">
        <ImageCard :sourcelink="imageDummy"></ImageCard>  
      </div>
    </div>

  </div>
</template>

<script>
import Login from './components/Login'
import Nav from './components/Nav'
import Register from './components/Register'
import ImageCard from './components/ImageCard'

export default {
  data(){
    return{
      message : "Hello World!",
      isLogin : "For child",
      iniArrays : [1,2,3,4],
      imageDummys : ["https://www.uxpincdn.com/studio/wp-content/uploads/2017/12/image9.png","https://cdn.dribbble.com/users/1055394/screenshots/4689149/elemental_agency_ui_design_from_healthy_app.png", "https://lvivity.com/wp-content/uploads/2019/03/ux-app-design.jpg"]
    }
  },
  components : {
    Login,
    Nav,
    Register,
    ImageCard
  },
  methods:{
    loginstatus(loginstatus){
      console.log(loginstatus + " Ini pesan dari anak, diterima bapak, lho!");
    }
  }
}
</script>

<style>
  body{
    background-color: #cee1c6 !important;
  }

</style>