<template>
  <div id="app">
    <nav-bar></nav-bar>
    <!--<friends></friends>-->
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/nav/nav-bar";
import Friends from "./components/friends";

export default {
  name: 'App',
  components: {Friends, NavBar}
}
</script>

<style>

</style>
