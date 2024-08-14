import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCargoStore } from '../cargo'

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add cargo', () => {
    const { cargos, createCargo, addCargo } = useCargoStore()

    const cargo = createCargo(2, 1)
    addCargo(cargo)
    expect(cargos.length).toBe(1)
  })
})
