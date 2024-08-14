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

  return {
    cargos,
    createCargo,
    addCargo,
    findCargo,
  }
})
