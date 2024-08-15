<script lang="ts" setup>
import { useCargoStore, useTargetStore } from '~/store'

const { targets, createTarget, addTarget } = useTargetStore()
addTarget(createTarget(1, 2))
addTarget(createTarget(1, 3))

const { cargos, createCargo, addCargo } = useCargoStore()
addCargo(createCargo(2, 2))
addCargo(createCargo(2, 3))
</script>

<template>
  <div relative>
    <GameMap />
    <GameTarget v-for="target, idx in targets" :key="idx" :pos="target" />
    <GameCargo v-for="cargo, idx in cargos" :key="idx" :cargo />
    <GamePlayer />
  </div>
</template>
