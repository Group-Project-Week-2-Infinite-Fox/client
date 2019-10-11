<template>
    <div class="mb-3">
        <nav class="navbar fixed-top navbar-expand-sm bg-light navbar-light">
            <a class="navbar-brand main-title">The Project</a>
            <div class="ml-auto">

            <button type="button" class="btn btn-info btn-sm">Upload</button>
            <button v-if="!login" type="button" class="btn btn-primary btn-sm">Login</button>
            <button v-if="login" type="button" class="btn btn-primary btn-sm">MyImage</button>
            <button v-if="login" type="button" class="btn btn-primary btn-sm">Logout</button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login : false
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
    .main-title{
    font-family: 'Mansalva', cursive;
    }
</style>