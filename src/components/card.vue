<template>
  <div class="col-4 mb-5">
    <div class="card">
      <div class="card-body">
        <div class="btn-group dropleft float-right">
          <button class="btn btn-light dropdown-toggle" style="background-color: white" data-toggle="dropdown"><font-awesome-icon icon="ellipsis-v" /></button>
          <div class="dropdown-menu">
            <button v-on:click="remove(id, arrayIndex)" class="dropdown-item" type="button">Remove</button>
          </div>
        </div>


        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{description}}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Melding 1</li>
          <li class="list-group-item">Melding 2</li>
        </ul>
        <div class="card-body">
          <button v-on:click="goTo(title)" class="btn btn-primary float-right">Go to {{title}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router/index'
  import {mapActions} from 'vuex'
  import { Actions } from '../store/actions'

    export default {
      name: "card",
      props: {
        id: Number,
        title: String,
        description: String,
        arrayIndex: Number,
      },
      methods: {
        ...mapActions({
          REMOVE_ITEM_DASHBOARD: Actions.REMOVE_ITEM_DASHBOARD
        }),
        goTo(name) {
          router.push({name: name.toLowerCase()})
        },
        remove(id, index) {
          this.REMOVE_ITEM_DASHBOARD({id: id, index: index})
        }
      }
    }
</script>

<style scoped>
  .dropdown-toggle::after {
    display:none;
  }
</style>
