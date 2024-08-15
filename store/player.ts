import { useCargoStore } from './cargo'
import { useMapStore } from './map'

export interface Player {
  x: number
  y: number
}

export const usePlayerStore = defineStore('player', () => {
  const player = reactive<Player>({
    x: 0,
    y: 0,
  })
  const { isWall } = useMapStore()
  const { findCargo, moveCargo } = useCargoStore()

  function _move(dx: number = 0, dy: number = 0) {
    const next = { x: player.x + dx, y: player.y + dy }

    if (isWall(next))
      return

    const cargo = findCargo(next)
    if (cargo) {
      const isMoveCargo = moveCargo(cargo, dx, dy)

      if (!isMoveCargo)
        return
    }

    player.x += dx
    player.y += dy
  }

  function moveToLeft() {
    _move(-1)
  }

  function moveToRight() {
    _move(1)
  }

  function moveToTop() {
    _move(0, -1)
  }

  function moveToDown() {
    _move(0, 1)
  }

  function setupPlayer(pos: Position) {
    player.x = pos.x
    player.y = pos.y
  }

  return {
    player,
    setupPlayer,
    moveToLeft,
    moveToRight,
    moveToTop,
    moveToDown,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
