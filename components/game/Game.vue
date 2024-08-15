<script lang="ts" setup>
import { useCargoStore, useGameStore, useTargetStore } from '~/store'

const { targets, createTarget, addTarget } = useTargetStore()
addTarget(createTarget(1, 2))
addTarget(createTarget(1, 3))

const { cargos, createCargo, addCargo } = useCargoStore()
addCargo(createCargo(2, 2))
addCargo(createCargo(2, 3))

const gameStore = useGameStore()
</script>

<template>
  <div relative>
    <GameMap />
    <GameTarget v-for="target, idx in targets" :key="idx" :pos="target" />
    <GameCargo v-for="cargo, idx in cargos" :key="idx" :cargo />
    <GamePlayer />
    <div v-if="gameStore.isComplete" text-left>
      <button rounded bg-red p-2>
        下一关
      </button>
    </div>
  </div>
</template>
