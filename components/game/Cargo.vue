<script lang="ts" setup>
import CargoImg from '~/assets/cargo.png'

const props = defineProps<{
  pos: Position
}>()

const { position } = usePosition(props.pos)
</script>

<template>
  <div absolute :style="position">
    <img :src="CargoImg" alt="cargo">
  </div>
</template>

<style scoped>
</style>
