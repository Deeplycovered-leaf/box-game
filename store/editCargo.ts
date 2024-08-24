import type { Cargo } from './cargo'

export type EditCargo = Omit<Cargo, 'isOnTarget' >

let id = 1
export const useEditCargoStore = defineStore('editCargo', () => {
  const cargos = reactive<EditCargo[]>([])

  function createCargo(x: number, y: number): EditCargo {
    return { x, y, id: id++ }
  }

  function addCargo(cargo: EditCargo) {
    cargos.push(cargo)
  }

  return { cargos, createCargo, addCargo }
})
