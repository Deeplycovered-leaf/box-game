import { describe, expect, it } from 'vitest'
import { usePosition } from '../usePosition'
import { STEP_EDIT } from '~/constants'

describe('usePosition', () => {
  it('should return position', () => {
    const pos = { x: 1, y: 1 }
    const { position } = usePosition(pos)

    expect(position.value).toEqual({ left: '32px', top: '32px' })
  })

  it('should set position step', () => {
    const pos = { x: 1, y: 1 }
    const { position } = usePosition(pos, STEP_EDIT)

    expect(position.value).toEqual({ left: '34px', top: '34px' })
  })

  it('should update position when reactive data change', () => {
    const pos = reactive({ x: 1, y: 1 })
    const { position } = usePosition(pos)

    pos.x = 2

    expect(position.value).toEqual({ left: '64px', top: '32px' })
  })
})
