import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapEditStore } from '../mapEdit'
import { useEditCargoStore } from '../editCargo'

describe('edit Cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const mapEditStore = useMapEditStore()
    const row = 8
    const col = 8

    mapEditStore.initMap(row, col)
  })

  it('should remove cargo', () => {
    const editCargoStore = useEditCargoStore()

    editCargoStore.addCargo(editCargoStore.createCargo(1, 2))

    editCargoStore.removeCargo({ x: 1, y: 2 })

    expect(editCargoStore.cargos.length).toBe(0)
  })
})
