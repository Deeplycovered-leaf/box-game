import { MapTile } from '~/constants'

type GameMap = MapTile[][]
interface Position {
  x: number
  y: number
}

export const useMapStore = defineStore('map', () => {
  const map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ]

  function setupMap(newMap: GameMap) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position) {
    return map[position.x][position.y] === MapTile.Wall
  }

  return {
    map,
    setupMap,
    isWall,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
