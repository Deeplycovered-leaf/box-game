import { type Cargo, useCargoStore } from './cargo'
import { type GameMap, useMapStore } from './map'
import { type Player, usePlayerStore } from './player'
import { type Target, useTargetStore } from './target'

export interface LevelData {
  player: Player
  targets: Target[]
  cargos: Omit<Cargo, 'isOnTarget'>[]
  map: GameMap
}

export const useGameStore = defineStore('game', () => {
  const { cargos } = useCargoStore()
  const isComplete = computed(() => cargos.every(c => c.isOnTarget))

  function setupGame(data: LevelData) {
    const { setupMap } = useMapStore()
    const { setupPlayer } = usePlayerStore()
    const { setupTargets } = useTargetStore()
    const { setupCargos } = useCargoStore()

    setupMap(data.map)
    setupPlayer(data.player)
    setupTargets(data.targets)
    setupCargos(data.cargos)
  }

  return {
    isComplete,
    setupGame,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
