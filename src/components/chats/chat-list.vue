<template>
  <div class="container-fluid">
    <div class="row card">
      <div class="col-12">

          <div class="row size">
            <div class="col-3">
              <div class=frame>
                <span class="helper"></span><img v-bind:src="user.user.avatar ? user.user.avatar : 'static/assets/images/questionmark.png'" height=250 />
              </div>
            </div>
            <div class="col-9">
              <div class=frame>
                <span class="float-right">
                    <font-awesome-icon class="mr-2" data-toggle="modal" data-target="#addNewChat" icon="plus"/>
                </span>
              </div>
            </div>
          </div>


      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <chat-user></chat-user>
        <chat-user></chat-user>
        <chat-user></chat-user>
        <chat-user></chat-user>
      </div>
    </div>
    <chat-newchat/>
  </div>
</template>

<script>
  import ChatUser from './chat-user'
  import {mapState} from 'vuex'
  import ChatNewchat from '../modal/chat-newchat'


  export default {
    name: 'chat-list',
    components: {ChatNewchat, ChatUser},
    computed: {
      ...mapState({
        user: 'user'
      })
    },
  }
</script>

<style scoped>
  .size{
    height: 3.5rem;
  }
  .frame {
    height: 25px;      /* equals max image height */
    white-space: nowrap;

    text-align: center; margin: 1em 0;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  img {
    background: #3A6F9A;
    vertical-align: middle;
    max-height: 25px;
    max-width: 160px;
  }
</style>
