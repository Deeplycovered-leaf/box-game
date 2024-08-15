import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTargetStore } from '../target'
import { useCargoStore } from '../cargo'
import { useGameStore } from '../game'
import { useMapStore } from '../map'
import { usePlayerStore } from '../player'

const firstLevelData = {
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
const secondLevelData = {
  player: {
    x: 2,
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
    { x: 3, y: 3 },
    { x: 1, y: 3 },
  ],
}
const gameData = [firstLevelData, secondLevelData]

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

    const gameStore = useGameStore()

    expect(gameStore.isComplete).toBe(true)
  })

  it('should not game complete', () => {
    const { moveCargo, createCargo, addCargo } = useCargoStore()
    const cargo = createCargo(2, 1)
    addCargo(cargo)

    const { createTarget, addTarget } = useTargetStore()
    addTarget(createTarget(2, 2))

    moveCargo(cargo, 0, 1)
    moveCargo(cargo, 0, 1)

    const gameStore = useGameStore()

    expect(gameStore.isComplete).toBe(false)
  })

  it('should setup game', () => {
    const { setupGame } = useGameStore()

    setupGame(gameData)

    expect(usePlayerStore().player).toEqual(firstLevelData.player)
    expect(useMapStore().map).toEqual(firstLevelData.map)
    expect(useTargetStore().targets.length).toBe(firstLevelData.targets.length)
    expect(useCargoStore().cargos.length).toBe(firstLevelData.cargos.length)
  })

  it('should next level game', () => {
    const gameStore = useGameStore()

    gameStore.setupGame(gameData)
    gameStore.toNextLevel()

    expect(gameStore.level).toBe(2)
    expect(usePlayerStore().player).toEqual(secondLevelData.player)
    expect(useMapStore().map).toEqual(secondLevelData.map)
    expect(useTargetStore().targets.length).toEqual(secondLevelData.targets.length)
    expect(useCargoStore().cargos.length).toBe(secondLevelData.cargos.length)
  })
})
