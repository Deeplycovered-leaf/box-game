<script lang="ts" setup>
import { useEditCargoStore } from '~/store'

const editCargoStore = useEditCargoStore()
</script>

<template>
  <div>
    <div flex>
      <div class="relative w-2/3 bg-red">
        <ClientOnly>
          <EditMap />
          <EditPlayer />
          <EditCargo v-for="cargo in editCargoStore.cargos" :key="cargo.id" :cargo />
        </ClientOnly>
      </div>
      <div>data show zone</div>
    </div>
    <div><EditSelectElement /></div>
  </div>
</template>

<style scoped>
</style>
