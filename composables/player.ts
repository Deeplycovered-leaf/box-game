import { usePlayerStore } from '~/store/player'

export function usePosition() {
  const { player } = usePlayerStore()
  const STEP = 32

  const position = computed(() => ({
    left: `${player.x * STEP}px`,
    top: `${player.y * STEP}px`,
  }))

  return { position }
}

export function useMove() {
  const { moveToLeft, moveToRight, moveToTop, moveToDown } = usePlayerStore()

  useEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        moveToLeft()
        break
      case 'ArrowRight':
        moveToRight()
        break
      case 'ArrowUp':
        moveToTop()
        break
      case 'ArrowDown':
        moveToDown()
        break
      default:
        break
    }
  })
}
