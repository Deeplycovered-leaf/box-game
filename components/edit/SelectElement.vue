<script lang="ts" setup>
import type { EditElement } from '~/store'
import {
  cargoEditEl,
  floorEditEl,
  playerEditEl,
  targetEditEl,
  useEditElStore,
  useMapEditStore,
  wallEditEl,
} from '~/store'

const editElStore = useEditElStore()
const editMapStore = useMapEditStore()

editMapStore.initMap(8, 8)

watchEffect(() => {
  if (!editMapStore.row)
    return
  editMapStore.updateMapRow()
})

watchEffect(() => {
  if (!editMapStore.col)
    return
  editMapStore.updateMapCol()
})

const selectedElementName = computed(() => {
  if (!editElStore.getCurrentElement())
    return '没有选择'
  return editElStore.getCurrentElement()?.name
})

function handleSelect(editEl: EditElement) {
  editElStore.setCurrentElement(editEl)
}
</script>

<template>
  <div mt space-y-2>
    <div mt-2 text-left space-y-2>
      <div>
        row: <input v-model="editMapStore.row" class="dark:bg-dark" type="text">
      </div>
      <div>
        col: <input v-model="editMapStore.col" class="dark:bg-dark" type="text">
      </div>
    </div>
    <h3 text-left>
      选择元素
    </h3>
    <div flex items-center gap-2>
      <h4>地图:</h4>
      <IconWall @click="handleSelect(wallEditEl)" />
      <IconFloor @click="handleSelect(floorEditEl)" />
    </div>
    <div flex items-center gap-2>
      <h4>角色:</h4>
      <IconPlayer @click="handleSelect(playerEditEl)" />
      <IconCargo @click="handleSelect(cargoEditEl)" />
      <IconTarget @click="handleSelect(targetEditEl)" />
    </div>
    <div>
      当前选择: {{ selectedElementName }}
    </div>
  </div>
</template>
