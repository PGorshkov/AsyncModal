# AyncModal
## Install
`
npm install 'git://github.com/PGorshkov/AsyncModal.git' -S
`

## Example
**App.vue**
```javascript
<template>
  <div id="app" class="app">
    <asyncmodal ref="modal"/>
    <router-view/>
  </div>
</template>
<script>
import asyncmodal from 'asyncmodal'
export default {
  name: 'app',
  components: {
    asyncmodal
  },
  mounted () {
    this.$root.$modal = this.$refs.modal.openModal
  }
}
</script>
```
**OpenModal**
```javascript
import Component from 'Component.vue'

async openModal () {
	const props = {}
	const options = {}
	const data = await this.$root.$modal(Component, props, options)
	console.log(data)
}
```
**Component.vue**
```javascript
closeModal () {
	const promiseReturn = { test: 'test' }
	this.$attrs.closeModal(promiseReturn, true)
}
```

## Methods
|  Methods | params  |
| ------------ | ------------ |
| **openModal**   | component (**required**), propsComponent = {}, modalOptions = {}  |
| **closeModal**  |  promiseReturn = null, destroyFull = false |

## Modal options
|  Options | type | description |
| ------------ | ------------ | ------------ |
| **closeClickOverlay** | Boolean | Close modal click overlay |
