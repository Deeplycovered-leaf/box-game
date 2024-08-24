<script setup lang="ts">
import { MapTile } from '~/constants'
import { useEditElStore, useMapEditStore } from '~/store'

const props = defineProps<{
  y: number
  x: number
}>()

const editMapStore = useMapEditStore()
const editElStore = useEditElStore()

const { startDrag, stopDrag, isDragging } = useDrag()
function handleClick() {
  editElStore.getCurrentElement()?.execute(props)
}

function handleMouseDown() {
  startDrag()
  useEventListener(window, 'mouseup', stopDrag)
}

function handleMouseMove() {
  if (isDragging())
    editElStore.getCurrentElement()?.execute(props)
}
</script>

<template>
  <div
    b b-white
    @click="handleClick()"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
  >
    <IconWall v-if="editMapStore.map[props.y][props.x] === MapTile.Wall" />
    <IconFloor v-else-if="editMapStore.map[props.y][props.x] === MapTile.Floor" />
  </div>
</template>
