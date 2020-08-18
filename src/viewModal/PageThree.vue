<template>
  <section style="display: flex; flex-direction: column">
    <span>Two page component - {{ propFirst }}</span>
    <button @click="$attrs.closeModal('return data PageThree All', true)">Закрыть все</button>
    <button @click="$attrs.closeModal('return data PageThree')">Закрыть</button>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class PageThree extends Vue {
  @Prop({ default: 'default value PageThree' }) readonly propFirst!: string
}
</script>
