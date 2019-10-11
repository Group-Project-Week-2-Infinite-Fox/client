<template>
    <div class="container h-100 form-login">
      <div class="row h-100 justify-content-center align-items-center">
        <form @submit.prevent="login()" class="col-10">
        <h1 class="text-left mb-5 main-title">TheProject</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="loginForm.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="loginForm.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-success">Login</button>
        </form>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name : 'Login',
  data(){
    return{
      loginForm:{
        email:"",
        password:""
      },
      loginStatus: false
    }
  },
  props : {
    
  },
  methods : {
    login(){
      axios({
        method:"post",
        url:"http://localhost:3000/users/login",
        data : {
          email : this.email,
          password : this.password
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        this.$emit("login-status", this.loginStatus)
        // console.log(this.loginStatus);
        Swal.fire({
          title: 'Awwwwwwwww!',
          text: 'Wrong password/email.',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
  body,html{
    height:100%;
  }
  .form-login{
    background-color: #c6dee1;
  }
  .main-title{
    font-family: 'Mansalva', cursive;
  }
  .swal2-container.swal2-shown {
    background-color: #f27474 !important;
  }
</style>