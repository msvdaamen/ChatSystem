<template>
  <div class="row card">
    <div class="col-12">
      <div class="row size">
        <div class="col-3">
          <div class=frame>
            <span class="helper"></span><img src="static/assets/images/questionmark.png" height=250 />
          </div>
        </div>
        <div class="col-9">
          <div class=frame>
            <span class="float-left">
              Mitchell Blansjaar
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chat-user'
  }
</script>
















<style scoped>
  .size{
    height: 3.5rem;
  }
  img {
    border-radius: 50%;
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
