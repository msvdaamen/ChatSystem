<template>
  <div class="col-4 mb-5">
    <div class="card">
      <div class="card-body">
        <div class="btn-group dropleft float-right">
          <button class="btn btn-light dropdown-toggle" style="background-color: white" data-toggle="dropdown"><font-awesome-icon icon="ellipsis-v" /></button>
          <div class="dropdown-menu">
            <button class="dropdown-item" type="button">Remove</button>
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

    export default {
      name: "card",
      props: {
        title: String,
        description: String,
      },
      methods: {
        goTo(name) {
          router.push({name: name.toLowerCase()})
        }
      }
    }
</script>

<style scoped>
  .dropdown-toggle::after {
    display:none;
  }
</style>
