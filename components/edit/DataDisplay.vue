<script lang="ts" setup>
import type { LevelData } from '~/store'
import { useEditCargoStore, useEditPlayerStore, useEditTargetStore, useMapEditStore } from '~/store'

const { map } = useMapEditStore()
const { player } = useEditPlayerStore()
const { cargos } = useEditCargoStore()
const { targets } = useEditTargetStore()

const gameData = computed<LevelData>(() => ({
  map,
  player,
  cargos: format(cargos),
  targets: format(targets),
}))

function format(data: { x: number, y: number, id: number }[]) {
  return data.map(({ x, y }) => ({ x, y }))
}
</script>

<template>
  <div>
    <h2>数据展示</h2>
    <code>{{ gameData }}</code>
  </div>
</template>
