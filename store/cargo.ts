import { useMapStore } from './map'

export interface Cargo {
  x: number
  y: number
}

export const useCargoStore = defineStore('cargo', () => {
  const cargos: Cargo[] = reactive([])

  function createCargo(x: number, y: number): Cargo {
    return { x, y }
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

    return true
  }

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
    moveCargo,
  }
})
