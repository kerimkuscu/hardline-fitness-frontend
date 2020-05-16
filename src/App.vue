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
        }
    }
</script>
