<template>
    <div class="container-fluid">
      <div class="row mt-5">
        <card title="Chats" description="Some content"></card>
        <card title="Tasks" description="Some content"></card>
        <card title="Agenda" description="Some content"></card>

        <card title="notes" description="Your notes"></card>

        <card title="Chats" description="Shortcut to Mitchell"></card>

      </div>

      <div class="btn-group dropup">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

        </button>
        <div class="dropdown-menu">
          <button class="btn">
            <font-awesome-icon icon="plus"/>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
    import Card from '../components/card'

    export default {
      name: 'dashboard',
      components: {Card}
    }
</script>

<style scoped>
.dropup {
  position: fixed;
  right: 10px;
  bottom: 10px
}
  .dropdown-menu {
    min-width: 0;
    border: 0;
  }
  .btn {
    border-radius: 50%;
    width:50px;
    height:50px;
    /*border: 2px solid #f5f5f5;*/
    /*background-color:red;*/
  }
</style>
