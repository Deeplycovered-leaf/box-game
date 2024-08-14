import { useMapStore } from './map'
import { MapTile } from '~/constants'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1,
  })
  const { isWall } = useMapStore()

  function moveToLeft() {
    if (isWall({ x: player.x - 1, y: player.y }))
      return

    player.x -= 1
  }

  function moveToRight() {
    if (isWall({ x: player.x + 1, y: player.y }))
      return
    player.x += 1
  }

  function moveToTop() {
    if (isWall({ x: player.x, y: player.y - 1 }))
      return
    player.y -= 1
  }

  function moveToDown() {
    if (isWall({ x: player.x, y: player.y + 1 }))
      return
    player.y += 1
  }

  return {
    player,
    moveToLeft,
    moveToRight,
    moveToTop,
    moveToDown,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
