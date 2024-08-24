import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMapEditStore } from '../mapEdit'
import { cargoEditEl, floorEditEl, playerEditEl, useEditElStore, wallEditEl } from '../editEl'
import { useEditPlayerStore } from '../editPlayer'
import { useEditCargoStore } from '../editCargo'
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
    editElStore.getCurrentElement()?.execute({ x: 1, y: 1 })

    expect(mapEditStore.map[1][1]).toBe(MapTile.Wall)
  })

  it('should change to floor when current selected el is floor', () => {
    const mapEditStore = useMapEditStore()
    const editElStore = useEditElStore()

    editElStore.setCurrentElement(floorEditEl)
    editElStore.getCurrentElement()?.execute({ x: 1, y: 1 })

    expect(mapEditStore.map[1][1]).toBe(MapTile.Floor)
  })

  it('should update position of player when current selected el is player', () => {
    const editPlayerStore = useEditPlayerStore()
    const editElStore = useEditElStore()

    editElStore.setCurrentElement(playerEditEl)
    const position = { x: 1, y: 1 }
    editElStore.getCurrentElement()?.execute(position)

    expect(editPlayerStore.player.x).toBe(position.x)
    expect(editPlayerStore.player.y).toBe(position.y)
  })

  it('should add cargo in edit map', () => {
    const { cargos, createCargo, addCargo } = useEditCargoStore()

    const cargo = createCargo(2, 1)
    addCargo(cargo)
    expect(cargos.length).toBe(1)
  })

  it('should create cargo when current selected el is cargo', () => {
    const editCargoStore = useEditCargoStore()
    const editElStore = useEditElStore()

    editElStore.setCurrentElement(cargoEditEl)
    const position = { x: 1, y: 1 }
    editElStore.getCurrentElement()?.execute(position)

    expect(editCargoStore.cargos[0].x).toBe(position.x)
    expect(editCargoStore.cargos[0].y).toBe(position.y)
  })

  it('should remove cargo when dbClick edit map cargo', () => {
    const editCargoStore = useEditCargoStore()
    const editElStore = useEditElStore()

    editElStore.setCurrentElement(cargoEditEl)
    const position = { x: 1, y: 1 }
    editElStore.getCurrentElement()?.execute(position)

    editCargoStore.removeCargo(position)

    expect(editCargoStore.cargos.length).toBe(0)
  })
})
