import { useEditPlayerStore } from './editPlayer'
import { useMapStore } from './map'
import { useMapEditStore } from './mapEdit'
import { MapTile } from '~/constants'

export interface EditElement {
  execute: (postion: Position) => void
}

export const wallEditEl: EditElement = {
  execute(position: Position) {
    const mapEditStore = useMapEditStore()
    mapEditStore.map[position.y][position.x] = MapTile.Wall
  },
}

export const floorEditEl: EditElement = {
  execute(position: Position) {
    const mapEditStore = useMapEditStore()
    mapEditStore.map[position.y][position.x] = MapTile.Floor
  },
}

export const playerEditEl: EditElement = {
  execute(position: Position) {
    const editPlayerStore = useEditPlayerStore()
    editPlayerStore.player.x = position.x
    editPlayerStore.player.y = position.y
  },
}

export const useEditElStore = defineStore('editEl', () => {
  let currentElement: EditElement

  function setCurrentElement(name: EditElement) {
    currentElement = name
  }

  function getCurrentElement() {
    return currentElement
  }

  return {
    setCurrentElement,
    getCurrentElement,
  }
})
