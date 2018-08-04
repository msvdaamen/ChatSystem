<template>
    <div class="container-fluid">
      <div class="row mt-5">
          <card v-for="(dashboard,index) in dashboards" :key="dashboard.id" v-bind:title="dashboard.application.name" v-bind:arrayIndex="index" v-bind:id="dashboard.id" v-bind:description="dashboard.application.description" />
        <!--<card title="Chats" description="Shortcut to Mitchell"></card>-->

      </div>

      <div class="btn-group dropup">
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

        </button>
        <div class="dropdown-menu">
          <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter">
            <font-awesome-icon icon="plus"/>
          </button>
        </div>
      </div>
      <add-application/>
    </div>
</template>

<script>
    import Card from '../components/card'
    import AddApplication from '../components/modal/add-application'
    import {mapState} from 'vuex'
    import {Actions} from '../store/actions'
    import draggable from 'vuedraggable'

    export default {
      name: 'dashboard',
      components: {AddApplication, Card, draggable},
      computed: {
        ...mapState({
          dashboards: 'dashboard'
        })
      },
      data() {
        return {

        }
      },
      created() {
       this.$store.dispatch(Actions.GET_DASHBOARD_ITEMS)
      },
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
