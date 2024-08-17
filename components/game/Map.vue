<script lang="ts" setup>
import { MapTile } from '~/constants'
import { useMapStore } from '~/store/map'

const { map } = useMapStore()
</script>

<template>
  <div>
    <div v-for="row, i in map" :key="i" flex>
      <div v-for="_, j in row" :key="j">
        <IconWall v-if="map[i][j] === MapTile.Wall" />
        <IconFloor v-else-if="map[i][j] === MapTile.Floor" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
