import { type Cargo, useCargoStore } from './cargo'
import { type GameMap, useMapStore } from './map'
import { type Player, usePlayerStore } from './player'
import { type Target, useTargetStore } from './target'

export interface LevelData {
  player: Player
  targets: Omit<Target, 'id'>[]
  cargos: Omit<Cargo, 'isOnTarget' | 'id'>[]
  map: GameMap
}

export type GameData = LevelData[]

export const useGameStore = defineStore('game', () => {
  const cargoStore = useCargoStore()
  const isComplete = computed(() => cargoStore.isOnTargetAll)

  const level = ref(1)
  let _gameDataList: GameData

  function setupGame(gameData: GameData) {
    _gameDataList = gameData
    _setupLevel()
  }

  function _setupLevel() {
    const data = _gameDataList[level.value - 1]

    const { setupMap } = useMapStore()
    const { setupPlayer } = usePlayerStore()
    const { setupTargets } = useTargetStore()
    const { setupCargos } = useCargoStore()

    setupMap(data.map)
    setupPlayer(data.player)
    setupTargets(data.targets)
    setupCargos(data.cargos)
  }

  function toNextLevel() {
    level.value++
    _setupLevel()
  }

  return {
    isComplete,
    setupGame,
    level,
    toNextLevel,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
