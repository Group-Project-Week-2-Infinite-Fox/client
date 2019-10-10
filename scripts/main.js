new Vue({
    el: '#app',
    data: {
        status: 'off',
        triggeredForm: null,
        email: null,
        password: null,
        user: null
    },
    methods: {
        login() {
            const data = {email: this.email, password: this.password}
            axios({
                method: 'POST',
                url: 'http://localhost:3000/login',
                data
            })
            .then(console.log)
            .catch(err => {
                swal({
                    title: 'Oh no!',
                    text: err.message,
                    icon: 'error',
                    button: 'Dismiss'
                })
            })
        },
        register() {
            const data = { email: this.email, password: this.password }
            axios({
                method: 'POST',
                url: 'http://localhost:3000/register',
                data
            })
            .then(console.log)
            .catch(console.log)
        },
        findAllShared() {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/file/find'
            })
            .then(console.log)
            .catch(console.log)
        },
        uploadFile() {
            const user_id = user._id

        }
    }
})