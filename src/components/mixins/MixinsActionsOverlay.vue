<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import MixinsState from '@/components/mixins/MixinsState.vue'

@Component
export default class MixinsActionsOverlay extends mixins(MixinsState) {
  overlayAfterEnter () {
    this.isOpenContentAnimate = this.isOpenContent = true
  }

  overlayAfterLeave () {
    this.isOpen = false
  }
}

</script>
