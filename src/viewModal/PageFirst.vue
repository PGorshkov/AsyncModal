<template>
  <section style="display: flex; flex-direction: column">
    <span>First page component - {{ propFirst }}</span>
    <button @click="$attrs.closeModal('return data PageFirst')">Закрыть</button>
    <button @click="openM">Открыть окно</button>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PageTwo from '@/viewModal/PageTwo.vue'
@Component
export default class PageFirst extends Vue {
  @Prop({ default: 'default value propFirst' }) readonly propFirst!: string

  async openM () {
    const data = await (this as any).$root.$modal(PageTwo, { propFirst: 'propFirst' }, {})
    console.log('page First', data)
  }
}
</script>
