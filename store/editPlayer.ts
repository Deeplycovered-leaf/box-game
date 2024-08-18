import type { Player } from './player'

export const useEditPlayerStore = defineStore('editPlayer', () => {
  const player = reactive<Player>({
    x: 0,
    y: 0,
  })

  return { player }
})
