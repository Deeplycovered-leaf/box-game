<script lang="ts" setup>
import { useCargoStore } from '~/store/cargo'

const { cargos, createCargo, addCargo } = useCargoStore()
addCargo(createCargo(2, 1))
addCargo(createCargo(2, 2))
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
