import { useEditCargoStore } from './editCargo'
import { useEditPlayerStore } from './editPlayer'
import { useEditTargetStore } from './editTarget'
import { useMapEditStore } from './mapEdit'
import { MapTile } from '~/constants'

export interface EditElement {
  execute: (postion: Position) => void
  name: string
}

export const wallEditEl: EditElement = {
  name: '墙',
  execute(position: Position) {
    const mapEditStore = useMapEditStore()
    mapEditStore.map[position.y][position.x] = MapTile.Wall
  },
}

export const floorEditEl: EditElement = {
  name: '地板',
  execute(position: Position) {
    const mapEditStore = useMapEditStore()
    mapEditStore.map[position.y][position.x] = MapTile.Floor
  },
}

export const playerEditEl: EditElement = {
  name: '玩家',
  execute(position: Position) {
    const editPlayerStore = useEditPlayerStore()
    editPlayerStore.player.x = position.x
    editPlayerStore.player.y = position.y
  },
}

export const cargoEditEl: EditElement = {
  name: '箱子',
  execute(position: Position) {
    const editCargoStore = useEditCargoStore()
    const cargo = editCargoStore.createCargo(position.x, position.y)
    editCargoStore.addCargo(cargo)
  },
}

export const targetEditEl: EditElement = {
  name: '放置点',
  execute(position: Position) {
    const editTargetStore = useEditTargetStore()
    const target = editTargetStore.createTarget(position.x, position.y)
    editTargetStore.addTarget(target)
  },
}

export const useEditElStore = defineStore('editEl', () => {
  const currentElement = ref<EditElement | undefined>()

  function setCurrentElement(name: EditElement) {
    currentElement.value = name
  }

  function getCurrentElement() {
    return currentElement.value
  }

  return {
    currentElement,
    setCurrentElement,
    getCurrentElement,
  }
})
