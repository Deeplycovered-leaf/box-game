import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { usePlayerStore } from '~/store/player'

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
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
