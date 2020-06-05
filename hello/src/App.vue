<template>
  <div id="app">
    <!--<p>Welcome to our app {{a}}</p>-->
    <!-- shell -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      a: 'appname'
    }
  }
}
</script>

<style>
#app {
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top:0;
  left:0;margin: 0;

}
</style>
