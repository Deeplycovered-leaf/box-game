<script lang="ts" setup>
import { useCargoStore } from '~/store/cargo'

const { cargos } = useCargoStore()
</script>

<template>
  <div relative>
    <GameMap />
    <GamePlayer />
    <GameCargo v-for="cargo, idx in cargos" :key="idx" :pos="cargo" />
  </div>
</template>

<style scoped>
</style>
