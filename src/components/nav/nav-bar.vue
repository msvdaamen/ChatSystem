<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a v-on:click="home()" class="navbar-brand" style="cursor: pointer">Home</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <div class="row">
            <div class="col-8">
              <input v-on:keyup="search()" v-model="searchParm" type="text" class="form-control" placeholder="Search">
              <div v-if="searchParm" style="position: fixed; background-color: white; z-index: 10">
                <div class="container-fluid card">
                <div v-for="searchResult in searchResults" class="">
                    <div class="row mt-1">
                      <div class="col-4">
                        <font-awesome-icon v-on:click="add(searchResult.id)" icon="plus"></font-awesome-icon>
                      </div>
                      <div class="col-8">
                        <span>{{searchResult.name}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1">
              <button v-on:click="search()" class="btn btn-outline-primary">Search</button>
            </div>
          </div>
          <div class="mr-5 dropdown">
            <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span>{{friendRequests.length}}</span>
              <font-awesome-icon icon="bell"/>
            </button>
            <div class="dropdown-menu" aria-labelledby="notifications">
              <div class="container-fluid custom-dropdown-item">
                <div  v-for="(friendRequest, index) in friendRequests">
                  <div class="row">
                    <div class="col-12">
                      <span>{{friendRequest.user.name}} has send you a friend request</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <button v-on:click="pendingFriendRequest(friendRequest.id, friendRequest.user.id, '1', index)" class="btn btn-primary float-right">Accept</button>
                      <button v-on:click="pendingFriendRequest(friendRequest.id, friendRequest.user.id, '0', index)" class="btn float-right mr-1">Decline</button>
                    </div>
                  </div>
                  <hr>
                </div>
              </div>
              <span class="dropdown-item" v-if="friendRequests.length === 0">No new notifications</span>
            </div>
          </div>
        </ul>

        <div class="mr-3 dropdown">
          <img id="userActions" data-toggle="dropdown" v-bind:src="user.user.avatar ? user.user.avatar : 'static/assets/images/questionmark.png'" width="75" height="75" class="rounded img-thumbnail">
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
  import {Actions} from '../../store/actions'
  import {mapActions, mapState} from 'vuex'

    export default {
      name: "nav-bar",
      data() {
        return {
          searchParm: '',
          searchResults: []
        }
      },
      computed: {
        ...mapState({
          user: 'user',
          friendRequests: 'friendRequests'
        })
      },
      created() {
        const user_id = this.$store.state.user.user.id;

        this.$echo.channel('notifications.' + user_id).listen('NotificationFriendRequest', (payload) => {
          this.ADD_FRIEND_REQUEST(payload.friend)
        });


        this.$store.dispatch(Actions.SET_FRIEND_REQUEST);
      },
      methods: {
        ...mapActions({
          SEND_FRIEND_REQUEST: Actions.SEND_FRIEND_REQUEST,
          REMOVE_FRIEND_REQUEST: Actions.REMOVE_FRIEND_REQUEST,
          ADD_FRIEND_REQUEST: Actions.ADD_FRIEND_REQUEST
        }),
        pendingFriendRequest(id, user_id, confrim, index) {
          this.REMOVE_FRIEND_REQUEST({id: id, user_id: user_id, confrim: confrim, index: index })
        },
          add(id) {
            this.SEND_FRIEND_REQUEST({user_id: id})
          },
          search() {
            if(this.searchParm) {
              this.axios.post('/search', {search: this.searchParm}).then((response) => {
                this.searchResults = response.data;
              }).catch((error) => {
                console.log(error);
              })
            }else {
              this.searchResults = []
            }
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
    /*position: fixed !important;*/
    max-height: 50rem;
    overflow-y: auto;
  }
  .custom-dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: normal;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background: none;
    border: 0;
  }
  .dropdown-menu show{
    position: fixed !important;
    max-height: 20rem;
  }
</style>
