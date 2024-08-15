import { useCargoStore } from './cargo'

export interface Target {
  x: number
  y: number
}

export const useTargetStore = defineStore('target', () => {
  const targets: Target[] = reactive([])

  const { cargos } = useCargoStore()
  const isPass = computed(() => {
    return targets.every(t => cargos.some(c => c.x === t.x && c.y === t.y))
  })

  function createTarget(x: number, y: number): Target {
    return { x, y }
  }

  function addTarget(target: Target) {
    targets.push(target)
  }

  function findTarget(pos: Position): boolean {
    return targets.some(t => t.x === pos.x && t.y === pos.y)
  }

  return {
    targets,
    createTarget,
    addTarget,
    isPass,
    findTarget,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTargetStore, import.meta.hot))
