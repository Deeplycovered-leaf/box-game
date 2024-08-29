import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapEditStore } from '../mapEdit'
import { useEditTargetStore } from '../editTarget'

describe('edit target', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const mapEditStore = useMapEditStore()
    const row = 8
    const col = 8

    mapEditStore.initMap(row, col)
  })

  it('should remove target', () => {
    const editCargoStore = useEditTargetStore()

    editCargoStore.addTarget(editCargoStore.createTarget(1, 2))

    editCargoStore.removeTarget({ x: 1, y: 2 })

    expect(editCargoStore.targets.length).toBe(0)
  })
})
