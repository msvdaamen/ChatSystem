<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-2">
        <chat-list></chat-list>
      </div>
      <div class="col-10">
        <chat-chat></chat-chat>
      </div>
    </div>
  </div>
</template>

<script>
  import ChatList from '../components/chats/chat-list'
  import ChatChat from '../components/chats/chat-chat'
  export default {
    name: 'chats',
    components: {ChatChat, ChatList}
  }
</script>

<style scoped>

</style>
