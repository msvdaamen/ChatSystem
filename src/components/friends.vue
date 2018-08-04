<template>
    <div v-on:mouseenter="show()" v-on:mouseleave="hide()" class="display" v-bind:style="translatex">
        <div  class="container-fluid card" style="height: 100%">
            <div class="row mt-1" v-for="friend in friends">
                <div class="col-3">
                    <img v-bind:src="friend.friend.avatar ? friend.friend.avatar : 'static/assets/images/questionmark.png'" width="75" height="75" class="rounded img-thumbnail">
                </div>
                <div class="col-8">
                    {{friend.friend.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    import {Actions} from '../store/actions'
    import {Mutations} from '../store/mutations'

    export default {
    name: "friends",
      data() {
          return {
            translate: 99,
            isActive: false
          }
      },
      computed: {
        ...mapState({
          friends: 'friends'
        }),
        translatex () {
          return `transform: translateX(${ this.translate }%)`
        }
      },
        created() {
          this.$store.dispatch(Actions.SET_FRIENDS);

          const user_id = this.$store.state.user.user.id;

          this.$echo.channel('friends.' + user_id).listen('NewFriend', (payload) => {
            console.log(payload.friend)
            this.ADD_FRIEND(payload.friend)
          });
        },
      methods: {
        ...mapMutations({
          ADD_FRIEND: Mutations.ADD_FRIEND
        }),
          show() {
            this.isActive = true;
            let int = setInterval(() => {
                if (this.translate <= 0) {
                  this.translate = 0;
                  clearInterval(int);
                }else {
                  this.translate -= 1
                }
                if(!this.isActive) {
                  clearInterval(int);
                }
             }, 1);
          },
          hide() {
            this.isActive = false
            let int
              int = setInterval(() => {
                if (this.translate >= 99) {
                  this.translate = 99;
                  clearInterval(int);
                }else {
                  this.translate += 1
                }
                if(this.isActive) {
                  clearInterval(int);
                }
              }, 1);
          }
      }
    }
</script>

<style scoped>
  .display {
      z-index: 11;
    position: fixed;
    right: 0;
    /*transform: translateX(95%);*/
    width: 20rem;
    height: 100%;
    background-color: white;
  }
</style>
