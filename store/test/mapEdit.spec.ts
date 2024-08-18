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

  describe('row', () => {
    it('should add a row when increase', () => {
      const mapEditStore = useMapEditStore()

      mapEditStore.initMap(2, 2)
      mapEditStore.setRow(3)
      mapEditStore.updateMapRow()

      expect(mapEditStore.map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })

    it('should remove a row when decrease', () => {
      const mapEditStore = useMapEditStore()

      mapEditStore.initMap(3, 3)
      mapEditStore.setRow(2)
      mapEditStore.updateMapRow()

      expect(mapEditStore.map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })
  })

  describe('col', () => {
    it('should add a col when increase', () => {
      const mapEditStore = useMapEditStore()

      mapEditStore.initMap(2, 2)
      mapEditStore.setCol(3)
      mapEditStore.updateMapCol()

      expect(mapEditStore.map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })

    it('should remove a col when decrease', () => {
      const mapEditStore = useMapEditStore()

      mapEditStore.initMap(3, 3)
      mapEditStore.setCol(2)
      mapEditStore.updateMapCol()

      expect(mapEditStore.map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
  })
})
