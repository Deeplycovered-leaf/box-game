export const useMapStore = defineStore('map', () => {
  const map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
  ]

  return {
    map,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMapStore, import.meta.hot))
