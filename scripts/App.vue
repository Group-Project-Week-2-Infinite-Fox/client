<template>
    <div>
        <Nav></Nav>
    </div>
</template>

<script>

import Nav from './components/Nav'

export default {
    data() {
        return {
            message: 'Hello world',
        }
    },
    components: {
        Nav
    }
}
</script>

<style scoped>
</style>