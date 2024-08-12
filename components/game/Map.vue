<script lang="ts" setup>
import FloorIcon from '~/assets/floor.png'
import WallIcon from '~/assets/wall.png'
import { MapTile } from '~/constants'
import { useMapStore } from '~/store/map'

const { map } = useMapStore()
</script>

<template>
  <div flex flex-col items-center>
    <div v-for="row, i in map" :key="i" flex>
      <div v-for="_, j in row" :key="j">
        <img v-if="map[i][j] === MapTile.Wall" :src="WallIcon" alt="wall">
        <img v-else-if="map[i][j] === MapTile.Floor" :src="FloorIcon" alt="floor">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
