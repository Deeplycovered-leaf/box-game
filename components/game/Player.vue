<script lang="ts" setup>
import KeeperImg from '~/assets/keeper.png'

const { position } = usePosition()

useMove()
</script>

<template>
  <div absolute :style="position">
    <img :src="KeeperImg" alt="player">
  </div>
</template>

<style scoped>
</style>
