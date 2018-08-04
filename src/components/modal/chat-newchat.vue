<template>
    <div class="modal fade" id="addNewChat" tabindex="-1" role="dialog" aria-labelledby="addNewChat" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addNewChat">Select an friend you want to chat with</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <select v-model="friendSelected" class="form-control">
                                        <option disabled value="0">Select a friend</option>
                                        <option v-for="friend in friends" v-bind:value="friend.friend_id">{{friend.friend.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn" data-dismiss="modal">Close</button>
                    <button v-on:click="addFriendChat()" v-bind:disabled="friendSelected === 0" type="button" class="btn btn-primary" data-dismiss="modal">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'

  export default {
    name: 'chat-newchat',
    data() {
      return {
        friendSelected: 0
      }
    },
    created() {
      console.log(this.friends);
    },
    computed: {
      ...mapState({
        friends: 'friends'
      })
    },
    methods: {
      addFriendChat() {
        console.log("asdas")
      }
    }
  }
</script>

<style scoped>

</style>