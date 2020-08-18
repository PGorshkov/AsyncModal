<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import {
  IComponentItem,
  IModalOptions,
  IElementComponent,
  IPropsComponent
} from '@/components/interface/InterfaceAsyncModal'
import MixinsState from '@/components/mixins/MixinsState.vue'

@Component
export default class MixinsActions extends mixins(MixinsState) {
  /**
   * Открытие модального окна
   * @param {Component} component - vue компонент
   * @param {Object} props - входные параметры для компонента
   * @param {Object} modalOptions - надстройки для модального окна
   */
  openModal (component: any, props: IPropsComponent = {}, modalOptions: IModalOptions = {}): Promise<any> {
    document.body.style.overflow = 'hidden'
    this.isOpen = true
    this.$nextTick(() => {
      this.isOpenOverlay = true
    })
    if (this.componentsList.length) {
      this.isOpenContent = false
      this.isOpenChild = true
    }
    return new Promise((resolve, reject) => {
      const dataComponent = this.initComponent(component, props, modalOptions)
      this.componentsList.push({
        ...dataComponent,
        resolve: resolve,
        reject: reject
      })
    })
  }

  /**
   * Закрытие компонента в модальном окне
   * @param {any} promiseReturn - Закрыть все предыдущие компоненты и вернуть ответ последнего
   * @param {boolean} destroyFull - Закрыть все предыдущие компоненты и вернуть ответ последнего
   */
  closeModal (promiseReturn: any = null, destroyFull: boolean | null = false): void {
    this.destroyFull = destroyFull
    this.promiseReturn = promiseReturn
    if (!this.isOpenContentAnimate) {
      this.isOpenContent = false
    }
  }

  closeContent (): void {
    if (!this.isOpenChild) {
      let dataComponent: IComponentItem | undefined
      if (this.destroyFull) {
        dataComponent = this.componentsList.shift()
        this.componentsList = []
      } else {
        dataComponent = this.componentsList.pop()
      }
      dataComponent && dataComponent.resolve(this.promiseReturn)
    }
    if (!this.componentsList.length) {
      this.isOpenOverlay = false
      document.body.style.overflow = 'auto'
    } else {
      this.isOpenContent = true
      this.isOpenChild = false
    }
  }

  /**
   * Инициализация компонента
   * @param {Component} component - vue компонент
   * @param {Object} props - входные параметры для компонента
   * @param {Object} modalOptions - надстройки для модального окна
   */
  initComponent (component: any, props: IPropsComponent, modalOptions: IModalOptions): IElementComponent {
    return {
      component: component,
      props: {
        ...props,
        closeModal: this.closeModal
      },
      modalOptions: { ...this.modalOptions, ...modalOptions }
    }
  }
}

</script>
