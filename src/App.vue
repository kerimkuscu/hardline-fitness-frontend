<template>
  <div>
    <navbar />

    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
    import Navbar from './components/layout/navbar';

    export default {
        name: 'App',

        components: {
            Navbar
        },

        data: () => ({
            token: null
        }),

        mounted() {
            window.eventHub.$on('user-token', this.getToken);

            if (localStorage.token) {
                this.token = localStorage.token;
                window.eventHub.$emit('logged-in-user', this.token);
            }
        },

        methods: {
            getToken(data) {
                if (data) {
                    localStorage.token = data;
                }
            }
        }
    }
</script>
