import type { GameMap } from './map'
import { MapTile } from '~/constants'

export const useMapEditStore = defineStore('mapEdit', () => {
  const map = reactive<GameMap>([])

  const row = ref(0)
  const col = ref(0)

  function setRow(val: number) {
    row.value = val
  }

  function setCol(val: number) {
    col.value = val
  }

  function initMap(_row?: number, _col?: number) {
    if (_row)
      row.value = _row
    if (_col)
      col.value = _col

    map.splice(0, map.length)

    for (let i = 0; i < row.value; i++) {
      map[i] = []
      for (let j = 0; j < col.value; j++)
        map[i][j] = MapTile.Floor
    }
  }

  function updateMapRow() {
    const oldRow = map.length

    if (row.value > oldRow) {
      const diff = row.value - oldRow
      Array.from({ length: diff }).forEach(() => {
        map.push(
          Array
            .from({ length: col.value })
            .fill(MapTile.Floor) as MapTile[],
        )
      })
    }

    if (row.value < oldRow) {
      const diff = oldRow - row.value
      map.splice(map.length - 1 - diff, diff)
    }
  }

  function updateMapCol() {
    const oldCol = map[0].length

    if (col.value > oldCol) {
      const diff = col.value - oldCol
      map.forEach((r) => {
        r.push(
          ...Array.from({ length: diff }).fill(MapTile.Floor) as MapTile[],
        )
      })
    }

    if (col.value < oldCol) {
      const diff = oldCol - col.value
      map.forEach((r) => {
        r.splice(r.length - 1 - diff, diff)
      })
    }
  }

  return {
    map,
    row,
    setRow,
    col,
    setCol,
    initMap,
    updateMapRow,
    updateMapCol,
  }
})
