<script lang="ts" setup>
import KeeperImg from '~/assets/keeper.png'
import { usePlayerStore } from '~/store/player'

const { position } = usePosition()

useMove()

function usePosition() {
  const { player } = usePlayerStore()
  const STEP = 32

  const position = computed(() => ({
    left: `${player.x * STEP}px`,
    top: `${player.y * STEP}px`,
  }))

  return { position }
}

function useMove() {
  const { moveToLeft, moveToRight, moveToTop, moveToDown } = usePlayerStore()

  useEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        moveToLeft()
        break
      case 'ArrowRight':
        moveToRight()
        break
      case 'ArrowUp':
        moveToTop()
        break
      case 'ArrowDown':
        moveToDown()
        break
      default:
        break
    }
  })
}
</script>

<template>
  <div absolute :style="position">
    <img :src="KeeperImg" alt="player">
  </div>
</template>

<style scoped>
</style>
