<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IComponentItem, IModalOptions } from '@/components/interface/InterfaceAsyncModal'

@Component
/**
 * Описание класса AsyncModal
 * @param {Boolean} isOpen - состояние контейнера модального окна
 * @param {Boolean} isOpenChild - флаг для понимание что открывается следующая модалка
 * @param {Boolean} isOpenOverlay - состояние контейнера оверлея
 * @param {Boolean} isOpenContent - состояние контейнера контента
 * @param {Boolean} isOpenContentAnimate - состояние полного завершения анимации isOpenContent
 *
 * @param {Object} defaultModalOptions - Стандартные надстройки для модального окна
 * @param {Array} componentsList - Список компонентов в хронологии вызовов
 */
export default class MixinsState extends Vue {
  isOpen = false
  isOpenChild = false
  isOpenOverlay = false
  isOpenContent = false
  isOpenContentAnimate = false

  defaultModalOptions: IModalOptions = {
    closeClickOverlay: true
  }

  componentsList: IComponentItem[] = []

  promiseReturn: any = null

  destroyFull: boolean | null = false

  get viewComponent (): IComponentItem | null {
    return this.componentsList.length
      ? this.componentsList[this.componentsList.length - 1]
      : null
  }
}

</script>
