<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a v-on:click="home()" class="navbar-brand" style="cursor: pointer">Home</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <div class="row">
            <div class="col-8">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <div class="col-1">
              <button v-on:click="search()" class="btn btn-outline-primary">Search</button>
            </div>
          </div>
        </ul>
        <div class="mr-3 dropdown">
          <img id="userActions" data-toggle="dropdown" src="static/assets/images/questionmark.png" width="75" height="75" class="rounded img-thumbnail">
          <div class="dropdown-menu" aria-labelledby="userActions">
            <button v-on:click="profile(1)" class="dropdown-item">Profile</button>
            <button v-on:click="logout()" class="dropdown-item">Logout</button>
          </div>
        </div>

      </div>
    </nav>
  </div>

</template>

<script>
  import router from '../../router/index'

    export default {
      name: "nav-bar",
      methods: {
          search() {
            console.log('search')
          },
          profile(id) {
            router.push({name: 'profile', params: { id: id }})
          },
          home() {
            router.push({name: 'dashboard'})
          },
          logout() {
              this.axios.post('/logout').then((response) => {
                localStorage.removeItem('token')
                router.push({name: 'login'})
              }).catch((error) => {
                console.log(error)
              });
          }
      }
    }
</script>

<style scoped>
  .dropdown-menu {
    min-width: 0;
  }
</style>
