<template>
  <div class="container fullHeight">
    <div class="row fullHeight">
      <div class="col-12 offset-4 align-self-center">
        <h1 style="margin-bottom: 5rem">Create an account</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
        </div>
        <div class="form-group">
          <label>Username</label>
          <input v-model="username" type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm password</label>
          <input v-model="password_confirmation" type="password" class="form-control" id="confirmPassword" placeholder="Password">
        </div>
        <button v-on:click="register()"  class="btn btn-primary float-right">Register</button>
        <button v-on:click="login()" class="btn float-right mr-1">Login</button>
      </div>
    </div>
  </div>

</template>

<script>
  import router from '../../router/index'

  export default {
      name: "register",
      data() {
        return {
          email: '',
          username: '',
          password: '',
          password_confirmation: ''
        }
      },
      methods: {
        login() {
          router.push({name: 'login'});
        },
        register() {
          const data = {
            email: this.email,
            name: this.username,
            password: this.password,
            password_confirmation: this.password_confirmation
          }


          this.axios.post('/register', data).then((response) => {
            router.push({name: 'login'});
          })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    }
</script>

<style scoped>

</style>
