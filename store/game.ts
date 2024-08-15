import { useCargoStore } from './cargo'

export const useGameStore = defineStore('game', () => {
  const { cargos } = useCargoStore()
  const isComplete = computed(() => cargos.every(c => c.isOnTarget))

  return {
    isComplete,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
