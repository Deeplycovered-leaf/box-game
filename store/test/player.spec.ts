import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapStore } from '../map'
import { useCargoStore } from '../cargo'
import { usePlayerStore } from '~/store/player'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('normal move', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    })

    it('should move to left', () => {
      const { player, moveToLeft } = usePlayerStore()

      player.x = 1
      moveToLeft()

      expect(player.x).toBe(0)
    })

    it('should move to right', () => {
      const { player, moveToRight } = usePlayerStore()

      player.x = 1
      moveToRight()

      expect(player.x).toBe(2)
    })

    it('should move to top', () => {
      const { player, moveToTop } = usePlayerStore()

      player.y = 2
      moveToTop()

      expect(player.y).toBe(1)
    })

    it('should move to bottom', () => {
      const { player, moveToDown } = usePlayerStore()

      player.y = 1
      moveToDown()

      expect(player.y).toBe(2)
    })
  })

  describe('wall move', () => {
    beforeEach(() => {
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

    it('should not move to left when next is wall', () => {
      const { player, moveToLeft } = usePlayerStore()

      player.x = 1
      moveToLeft()

      expect(player.x).toBe(1)
    })

    it('should not move to right when next is wall', () => {
      const { player, moveToRight } = usePlayerStore()

      player.x = 3
      moveToRight()

      expect(player.x).toBe(3)
    })
    it('should not move to top when next is wall', () => {
      const { player, moveToTop } = usePlayerStore()

      player.y = 1
      moveToTop()

      expect(player.y).toBe(1)
    })
    it('should not move to down when next is wall', () => {
      const { player, moveToDown } = usePlayerStore()

      player.y = 3
      moveToDown()
      expect(player.y).toBe(3)
    })
  })

  describe('push a cargo', () => {
    beforeEach(() => {
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

    it('should push a cargo to right', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo(2, 1)
      addCargo(cargo)
      const { player, moveToRight } = usePlayerStore()
      player.x = 1
      player.y = 1

      moveToRight()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(3)
    })

    it('should push a cargo to left', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo(2, 1)
      addCargo(cargo)
      const { player, moveToLeft } = usePlayerStore()
      player.x = 3
      player.y = 1

      moveToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)
    })

    it('should push a cargo to top', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo(2, 2)
      addCargo(cargo)
      const { player, moveToTop } = usePlayerStore()
      player.x = 2
      player.y = 3

      moveToTop()

      expect(player.y).toBe(2)
      expect(cargo.y).toBe(1)
    })

    it('should push a cargo to down', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo(2, 2)
      addCargo(cargo)
      const { player, moveToDown } = usePlayerStore()
      player.x = 2
      player.y = 1

      moveToDown()

      expect(player.y).toBe(2)
      expect(cargo.y).toBe(3)
    })

    it('fix', () => {
      const map = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1],
      ]
      const { setupMap } = useMapStore()
      setupMap(map)

      const { player, moveToRight } = usePlayerStore()
      player.x = 3
      player.y = 1

      moveToRight()

      expect(player.x).toBe(4)
    })

    it('should not push cargo when cargo hits wall', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo(1, 1)
      addCargo(cargo)
      const { player, moveToLeft } = usePlayerStore()
      player.x = 2
      player.y = 1

      moveToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)
    })

    it('should not push cargo  when cargo hits cargo', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo1 = createCargo(1, 1)
      addCargo(cargo1)
      addCargo(createCargo(2, 1))
      const { player, moveToLeft } = usePlayerStore()
      player.x = 3

      moveToLeft()

      expect(player.x).toBe(3)
      expect(cargo1.x).toBe(1)
    })
  })
})
