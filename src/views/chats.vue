<template>
  <div>
    <chat-list></chat-list>
    <chat-chat></chat-chat>
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
