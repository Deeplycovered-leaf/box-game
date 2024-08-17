<script setup lang="ts">
import { MapTile } from '~/constants'
import { useMapEditStore } from '~/store'

const props = defineProps<{
  y: number
  x: number
}>()

const editStore = useMapEditStore()

function handleClick(y: number, x: number) {
  editStore.map[y][x] = MapTile.Wall
}
</script>

<template>
  <div b b-white @click="handleClick(props.y, props.x)">
    <IconWall v-if="editStore.map[props.y][props.x] === MapTile.Wall" />
    <IconFloor v-else-if="editStore.map[props.y][props.x] === MapTile.Floor" />
  </div>
</template>
