<template>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Select the project you want to add on your dashboard</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <select v-model="applicationSelected" class="form-control">
                                        <option v-for="(application, index) in applications" v-bind:value="application">{{application.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-check float-right">
                                    <input v-model="isShortcut" class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                        Shortcut
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div v-show="isShortcut " class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <select class="form-control">
                                        <option>Shortcut for</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" v-on:click="addApplication()">Add application</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {Actions} from '../../store/actions'

  export default {
    name: 'add-application',
    data() {
      return {
        applicationSelected: null,
        isShortcut: false,
        applications: []
      }
    },
    created() {
      this.axios.get('/applications').then((response) => {
        if(response.data) {
          this.applications =  response.data;
          this.applicationSelected = response.data[0];
        }
      })
    },
    methods: {
      ...mapActions({
        'ADD_DASHBOARD_ITEM': Actions.ADD_DASHBOARD_ITEM
      }),
      addApplication() {
        const data = {
          application_id: this.applicationSelected.id,
          shortcut_id: 0
        }
        this.ADD_DASHBOARD_ITEM(data)
      }
    }
  }
</script>

<style scoped>

</style>