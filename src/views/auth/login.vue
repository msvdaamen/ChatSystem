<template>
    <div class="container fullHeight">
      <div class="row fullHeight">
        <div class="col-12 offset-2 align-self-center">
          <h1 style="margin-bottom: 5rem">Welkom to my own chat system</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button :disabled="!valid()" v-on:click="login()" type="submit" class="btn btn-primary float-right">Login</button>
            <button v-on:click="register()"  class="btn float-right mr-1">Register</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import router from '../../router/index'
  import { mapState, mapMutations } from 'vuex'
  import { Mutations} from '../../store/mutations'

  export default {
        name: "login",
        data() {
          return {
            email: '',
            password: ''
          }
        },
      computed: {
        ...mapState({
          user: state => state.user
        })
      },
        methods: {
          ...mapMutations ({
            SET_USER: Mutations.SET_USER
        }),
          login() {
            this.axios.post('/login', {email: this.email, password:  this.password})
              .then((response) => {
                this.SET_USER(response.data);
                localStorage.setItem('token', response.data.token)
                router.push({name: 'dashboard'});
              })
              .catch((error) => {
                console.log(error)
              })
          },
          register() {
            router.push({name: 'register'});
          },
          valid() {
            return !!(this.validEmail(this.email) && this.password.length > 0);
          },
          validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }
        }
    }
</script>

<style scoped>

</style>
