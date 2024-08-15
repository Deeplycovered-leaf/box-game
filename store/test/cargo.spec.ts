import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'
import { useMapStore } from '../map'

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const map = [
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ]
    const { setupMap } = useMapStore()
    setupMap(map)
  })

  it('should add cargo', () => {
    const { cargos, createCargo, addCargo } = useCargoStore()

    const cargo = createCargo(2, 1)
    addCargo(cargo)
    expect(cargos.length).toBe(1)
  })

  describe('on the target', () => {
    it('in', () => {
      const { moveCargo, createCargo, addCargo } = useCargoStore()
      const cargo = createCargo(2, 1)
      addCargo(cargo)

      const { createTarget, addTarget } = useTargetStore()
      addTarget(createTarget(3, 1))

      moveCargo(cargo, 1, 0)

      expect(cargo.isOnTarget).toBe(true)
    })

    it('out', () => {
      const { moveCargo, createCargo, addCargo } = useCargoStore()
      const cargo = createCargo(2, 1)
      addCargo(cargo)

      const { createTarget, addTarget } = useTargetStore()
      addTarget(createTarget(2, 2))

      moveCargo(cargo, 0, 1)
      moveCargo(cargo, 0, 1)

      expect(cargo.isOnTarget).toBe(false)
    })
  })
})
