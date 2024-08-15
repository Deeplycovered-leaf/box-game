import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTargetStore } from '../target'
import { useCargoStore } from '../cargo'
import { useGameStore } from '../game'
import { useMapStore } from '../map'
import { usePlayerStore } from '../player'

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

  it('should setup game', () => {
    const levelData = {
      player: {
        x: 1,
        y: 1,
      },
      map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1],
      ],
      targets: [
        { x: 1, y: 2 },
        { x: 1, y: 3 },
      ],
      cargos: [
        { x: 2, y: 2 },
        { x: 2, y: 3 },
      ],
    }

    const { setupGame } = useGameStore()

    setupGame(levelData)

    expect(usePlayerStore().player).toEqual(levelData.player)
    expect(useMapStore().map).toEqual(levelData.map)
    expect(useTargetStore().targets).toEqual(levelData.targets)
    // expect(useCargoStore().cargos).contains(levelData.cargos)
  })
})
