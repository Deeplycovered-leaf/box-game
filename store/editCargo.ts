import type { Cargo } from './cargo'

export type EditCargo = Omit<Cargo, 'isOnTarget' >

export const useEditCargoStore = defineStore('editCargo', () => {
  const cargos = reactive<EditCargo[]>([])

  function createCargo(x: number, y: number): EditCargo {
    return { x, y, id: generateId() }
  }

  function addCargo(cargo: EditCargo) {
    cargos.push(cargo)
  }

  function removeCargo(pos: Position) {
    cargos.splice(cargos.findIndex(c => c.x === pos.x && c.y === pos.y), 1)
  }

  return { cargos, createCargo, addCargo, removeCargo }
})
