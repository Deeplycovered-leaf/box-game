<script lang="ts" setup>
import { usePlayerStore } from '~/store/player'

const { player } = usePlayerStore()
const { position } = usePosition(player)

useMove()
</script>

<template>
  <IconPlayer absolute :style="position" />
</template>

<style scoped>
</style>
