<script lang="ts" setup>
import CargoImg from '~/assets/cargo.png'
import CargoOnTargetImg from '~/assets/cargo_on_target.png'
import type { Cargo } from '~/store'

const props = defineProps<{
  cargo: Cargo
}>()

const { position } = usePosition(props.cargo)
</script>

<template>
  <div absolute :style="position">
    <img :src="cargo.isOnTarget ? CargoOnTargetImg : CargoImg" alt="cargo">
  </div>
</template>

<style scoped>
</style>
