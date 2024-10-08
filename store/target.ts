let Id = 1
export interface Target {
  x: number
  y: number
  id: number
}

export const useTargetStore = defineStore('target', () => {
  const targets: Target[] = reactive([])

  function createTarget(x: number, y: number): Target {
    return { x, y, id: Id++ }
  }

  function addTarget(target: Target) {
    targets.push(target)
  }

  function findTarget(pos: Position): boolean {
    return targets.some(t => t.x === pos.x && t.y === pos.y)
  }

  function setupTargets(pos: Position[]) {
    targets.splice(0, targets.length, ...pos.map(c => createTarget(c.x, c.y)))
  }

  return {
    targets,
    setupTargets,
    createTarget,
    addTarget,
    findTarget,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTargetStore, import.meta.hot))
