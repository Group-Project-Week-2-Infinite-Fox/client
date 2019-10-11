<template>

  <div class="col-12 mb-4">
    <div class="card" style="">
      <img :src="sourcelink" class="card-img-top" alt="">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Give rate into this image:</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button href="#" class="btn btn-danger">Vote!</button>
          <button type="button" class="btn btn-secondary btn" disabled> <span><img src="https://image.flaticon.com/icons/svg/1040/1040230.svg" class="mb-1" style="width:15px;height:15px;"></span> 4.8</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name : 'ImageCard',
  data(){
    return{
      
    }
  },
  props : {
    sourcelink : String
  },
  methods : {
    
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
  /* body,html{
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
  } */
</style>