import type { GameMap } from './map'

export const useMapEditStore = defineStore('mapEdit', () => {
  const map = reactive<GameMap>([
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2],
  ])

  return {
    map,
  }
})
