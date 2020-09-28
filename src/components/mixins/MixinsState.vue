<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
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
 * @param {Object} modalOptions - Надстройки для модального окна
 * @param {Array} componentsList - Список компонентов в хронологии вызовов
 */
export default class MixinsState extends Vue {
  @Prop({ type: Boolean }) closeClickOverlay: boolean | undefined
  isOpen = false
  isOpenChild = false
  isOpenOverlay = false
  isOpenContent = false
  isOpenContentAnimate = false

  modalOptions: IModalOptions = {}
  componentsList: IComponentItem[] = []

  promiseReturn: any = null

  destroyFull: boolean | null = false
}

</script>
