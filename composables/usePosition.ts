import { STEP_GAME } from '~/constants'

export interface Position {
  x: number
  y: number
}

export function usePosition(pos: Position, step: number = STEP_GAME) {
  const position = computed(() => ({
    left: `${pos.x * step}px`,
    top: `${pos.y * step}px`,
  }))

  return { position }
}
