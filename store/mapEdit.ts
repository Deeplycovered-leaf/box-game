import type { GameMap } from './map'
import { MapTile } from '~/constants'

export const useMapEditStore = defineStore('mapEdit', () => {
  const map = reactive<GameMap>([])

  const row = ref(8)
  const col = ref(8)
  function initMap() {
    map.splice(0, map.length)

    for (let i = 0; i < row.value; i++) {
      map[i] = []
      for (let j = 0; j < col.value; j++)
        map[i][j] = MapTile.Floor
    }
  }

  return {
    map,
    row,
    col,
    initMap,
  }
})
