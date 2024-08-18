import { describe, expect, it } from 'vitest'
import { useMapEditStore } from '../mapEdit'

describe('mapEdit', () => {
  it('should init map', () => {
    const mapEditStore = useMapEditStore()
    const row = 8
    const col = 8

    mapEditStore.initMap(row, col)

    expect(mapEditStore.map.length).toBe(row)
    expect(mapEditStore.map[0].length).toBe(col)
  })
})
