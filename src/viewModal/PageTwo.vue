<template>
  <section style="display: flex; flex-direction: column">
    <span>Two page component - {{ propFirst }}</span>
    <button @click="$attrs.closeModal('return data PageTwo All', true)">Закрыть все</button>
    <button @click="$attrs.closeModal('return data PageTwo')">Закрыть</button>
    <button @click="openM">Открыть окно</button>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PageThree from '@/viewModal/PageThree.vue'
@Component
export default class PageTwo extends Vue {
  @Prop({ default: 'default value  propFirst' }) readonly propFirst!: string

  async openM () {
    const data = await (this as any).$root.$modal(PageThree, { propFirst: 'propFirst page Two' }, {})
    console.log('page Two', data)
  }
}
</script>
