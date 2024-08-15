<script lang="ts" setup>
import { levelData } from '~/constants/gameData'
import { useCargoStore, useGameStore, useTargetStore } from '~/store'

const gameStore = useGameStore()
gameStore.setupGame(levelData)

const { targets } = useTargetStore()
const { cargos } = useCargoStore()
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
