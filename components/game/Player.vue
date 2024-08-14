<script lang="ts" setup>
import KeeperImg from '~/assets/keeper.png'
import { usePlayerStore } from '~/store/player'

const { player } = usePlayerStore()
const { position } = usePosition(player)

useMove()
</script>

<template>
  <div absolute :style="position">
    <img :src="KeeperImg" alt="player">
  </div>
</template>

<style scoped>
</style>
