<template>
  <div class="container">
    <div class="row">
      <chat-user></chat-user>
    </div>
  </div>
</template>

<script>
  import ChatUser from './chat-user'
  export default {
    name: 'chat-list',
    components: {ChatUser}
  }
</script>

<style scoped>

</style>
