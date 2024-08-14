import { usePlayerStore } from '~/store/player'

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
