import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapEditStore } from '../mapEdit'
import { floorEditEl, useEditElStore, wallEditEl } from '../editEl'
import { MapTile } from '~/constants'

describe('editEl', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const mapEditStore = useMapEditStore()
    const row = 8
    const col = 8

    mapEditStore.initMap(row, col)
  })

  it('should change to wall when current selected el is wall', () => {
    const mapEditStore = useMapEditStore()
    const editElStore = useEditElStore()

    editElStore.setCurrentElement(wallEditEl)
    editElStore.getCurrentElement().execute({ x: 1, y: 1 })

    expect(mapEditStore.map[1][1]).toBe(MapTile.Wall)
  })

  it('should change to floor when current selected el is floor', () => {
    const mapEditStore = useMapEditStore()
    const editElStore = useEditElStore()

    editElStore.setCurrentElement(floorEditEl)
    editElStore.getCurrentElement().execute({ x: 1, y: 1 })

    expect(mapEditStore.map[1][1]).toBe(MapTile.Floor)
  })
})
