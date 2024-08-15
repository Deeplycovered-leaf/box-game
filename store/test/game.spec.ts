import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTargetStore } from '../target'
import { useCargoStore } from '../cargo'
import { useGameStore } from '../game'
import { useMapStore } from '../map'

describe('game', () => {
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

  it('should game complete', () => {
    const { moveCargo, createCargo, addCargo } = useCargoStore()
    const cargo = createCargo(2, 1)
    addCargo(cargo)

    const { createTarget, addTarget } = useTargetStore()
    addTarget(createTarget(3, 1))

    moveCargo(cargo, 1, 0)

    const { isComplete } = useGameStore()

    expect(isComplete).toBe(true)
  })

  it('should not game complete', () => {
    const { moveCargo, createCargo, addCargo } = useCargoStore()
    const cargo = createCargo(2, 1)
    addCargo(cargo)

    const { createTarget, addTarget } = useTargetStore()
    addTarget(createTarget(2, 2))

    moveCargo(cargo, 0, 1)
    moveCargo(cargo, 0, 1)

    const { isComplete } = useGameStore()

    expect(isComplete).toBe(false)
  })
})
