<script lang="ts" setup>
import MapBlock from './MapBlock.vue'
import { useMapEditStore } from '~/store'

const mapEditStore = useMapEditStore()
</script>

<template>
  <div>
    <div v-for="row, i in mapEditStore.map" :key="i" flex>
      <div v-for="_, j in row" :key="j">
        <MapBlock :y="i" :x="j" />
      </div>
    </div>
  </div>
</template>
