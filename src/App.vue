<template>
  <div id="app">
    <nav-bar v-if="user.token"></nav-bar>
    <friends  v-if="user.token"></friends>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/nav/nav-bar";
import Friends from "./components/friends";
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {Friends, NavBar},
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>

<style>

</style>
