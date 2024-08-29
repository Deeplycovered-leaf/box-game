import type { Target } from './target'

export type EditTarget = Target

export const useEditTargetStore = defineStore('editTarget', () => {
  const targets = reactive<EditTarget[]>([])

  function createTarget(x: number, y: number): EditTarget {
    return { x, y, id: generateId() }
  }

  function addTarget(target: EditTarget) {
    targets.push(target)
  }

  function removeTarget(pos: Position) {
    targets.splice(targets.findIndex(c => c.x === pos.x && c.y === pos.y), 1)
  }

  return { targets, createTarget, addTarget, removeTarget }
})
