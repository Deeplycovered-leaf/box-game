import { MapTile } from '~/constants'

export type GameMap = MapTile[][]

export const useMapStore = defineStore('map', () => {
  const map = reactive<GameMap>([])

  function setupMap(newMap: GameMap) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position) {
    return map[position.y][position.x] === MapTile.Wall
  }

  return {
    map,
    setupMap,
    isWall,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
