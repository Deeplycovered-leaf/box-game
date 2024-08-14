import { describe, expect, it } from 'vitest'
import { useMapStore } from '../map'

describe('map', () => {
  it('should setup map', () => {
    const { map, setupMap } = useMapStore()

    const newMap = [
      [1, 1, 1],
      [1, 2, 1],
      [1, 1, 1],
    ]
    setupMap(newMap)

    expect(map).toEqual(newMap)
  })
})
