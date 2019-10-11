<template>
    <div id="app">
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <a class="navbar-brand">Navbar</a>
            <div class="navbar-nav">
                <div class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </div>
                {{ message }}
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!'
        }
    }
}
</script>

<style>

</style>