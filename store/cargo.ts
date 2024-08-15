import { useMapStore } from './map'
import { useTargetStore } from './target'

export interface Cargo {
  x: number
  y: number
  isOnTarget: boolean
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([])

  function createCargo(x: number, y: number): Cargo {
    return { x, y, isOnTarget: false }
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo)
  }

  function findCargo(position: Position) {
    return cargos.find(c => c.x === position.x && c.y === position.y)
  }

  function _isCargo(position: Position) {
    return findCargo(position)
  }

  function moveCargo(cargo: Cargo, dx: number, dy: number) {
    const { isWall } = useMapStore()

    const next = { x: cargo.x + dx, y: cargo.y + dy }
    if (isWall(next))
      return false

    if (_isCargo(next))
      return false

    cargo.x += dx
    cargo.y += dy

    _detectionTarget(cargo)

    return true
  }

  function _detectionTarget(cargo: Cargo) {
    const { findTarget } = useTargetStore()
    cargo.isOnTarget = findTarget(cargo)
  }

  function setupCargos(newCargos: Omit<Cargo, 'isOnTarget'>[]) {
    cargos.splice(0, cargos.length, ...newCargos.map(c => createCargo(c.x, c.y)))
  }

  return {
    cargos,
    setupCargos,
    createCargo,
    addCargo,
    findCargo,
    moveCargo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCargoStore, import.meta.hot))
