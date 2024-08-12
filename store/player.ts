export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 1,
    y: 1,
  })

  function moveToLeft() {
    player.x -= 1
  }

  function moveToRight() {
    player.x += 1
  }

  function moveToTop() {
    player.y -= 1
  }

  function moveToDown() {
    player.y += 1
  }

  return {
    player,
    moveToLeft,
    moveToRight,
    moveToTop,
    moveToDown,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
