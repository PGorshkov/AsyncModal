<template>
  <section class="async-modal__container" v-if="isOpen">
    <transition
        name="modal"
        v-on:after-enter="overlayAfterEnter"
        v-on:afterLeave="overlayAfterLeave">
      <section class="async-modal__overlay" v-if="isOpenOverlay">
      </section>
    </transition>
    <transition
        name="bounce"
        v-on:after-enter="isOpenContentAnimate = false"
        v-on:afterLeave="closeContent()">
      <section class="async-modal__content" v-if="isOpenContent && !!lastComponent">
        <keep-alive>
          <component
              :is="lastComponent.component"
              v-bind="lastComponent.props"
          />
        </keep-alive>
      </section>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import MixinsActions from '@/components/mixins/MixinsActions.vue'
import MixinsActionsOverlay from '@/components/mixins/MixinsActionsOverlay.vue'

@Component
export default class AsyncModal extends mixins(
  MixinsActions,
  MixinsActionsOverlay
) {
  get lastComponent () {
    return this.componentsList[this.componentsList.length - 1] || false
  }
}
</script>

<style lang="scss">
.async-modal{
  overflow: hidden;
  &__container{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &__overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 1000;
  }
  &__content{
    background-color: #ffffff;
    padding: 8px;
    border-radius: 5px;
    min-width: 300px;
    max-width: 90vh;
    max-height: 90vh;
    z-index: 1001;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity .1s;
}
.modal-enter-active,
.modal-leave-active {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .3s;
}
.bounce-leave-active {
  animation: bounce-in .3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(50vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
