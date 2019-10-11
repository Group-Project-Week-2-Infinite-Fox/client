<template>
    <div>
        <div class="card border-success mb-3" style="max-width: 18rem;" @mouseover='mouseIn()' @mouseleave="mouseOut()">
        <div class="card-header bg-transparent border-success"><marquee direction='left'>Welcome to The-Project</marquee></div>
        <div class="card-body text-success">
            <h5 class="card-title">{{message}}</h5>
            <input type="text" readonly value='file..'>
            <input type="file" class='filee'>
        </div>
        <div class="card-footer bg-transparent border-success">
            <div class="fb-share-button" 
                data-href="https://www.google.com" 
                data-layout="button_count">
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Upload',
    data(){
        return {
            message : 'Upload Your file',
            shared: 0
        }
    },
    methods:{
        mouseIn(){
            this.message = 'Choose File..'
        },
        mouseOut(){
            this.message = 'Upload Your file'
        },
        share(d, s, id) {
            this.shared++
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
            fjs.parentNode.insertBefore(js, fjs);
        }
    },
    mounted() {
        this.share(document, 'script', 'facebook-jssdk')
    },
    watch: {
        shared() {
            this.share(document, 'script', 'facebook-jssdk')
        }
    }
}
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
</script>

<style>
.card{
    text-align : center;
}
.card .card-header{
    font-family:monospace;
    font-size: 30px;
}
.filee{
    margin : 10px auto;
    width :105px;
}
</style>