<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <async-modal ref="modal" />
    <button @click="openM">Open Modal</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AsyncModal from './components/AsyncModal.vue'

import PageFirst from './viewModal/PageFirst.vue'

@Component({
  components: {
    AsyncModal
  }
})
export default class App extends Vue {
  mounted () {
    (this as any).$root.$modal = (this as any).$refs.modal.openModal
  }

  async openM () {
    const data = await (this as any).$root.$modal(PageFirst, { propFirst: 'propFirst' }, {})
    console.log('App', data)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
