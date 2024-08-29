<script lang="ts" setup>
import { GameData } from '~/constants'
import { useCargoStore, useGameStore, useTargetStore } from '~/store'

const gameStore = useGameStore()
gameStore.setupGame(GameData)

const { targets } = useTargetStore()
const { cargos } = useCargoStore()

const showNext = computed(() => gameStore.isComplete && GameData.length - gameStore.level > 0)
</script>

<template>
  <div relative>
    <GameMap />
    <GameTarget v-for="target in targets" :key="target.id" :pos="target" />
    <GameCargo v-for="cargo in cargos" :key="cargo.id" :cargo />
    <GamePlayer />
    <div v-if="showNext" text-left>
      <button rounded bg-red p-2 @click="gameStore.toNextLevel">
        下一关
      </button>
    </div>
  </div>
</template>
