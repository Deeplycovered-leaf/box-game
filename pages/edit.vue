<script lang="ts" setup>
import { useEditCargoStore, useEditTargetStore } from '~/store'

const editCargoStore = useEditCargoStore()
const editTargetStore = useEditTargetStore()
</script>

<template>
  <div>
    <div flex>
      <div class="relative w-2/3 bg-red">
        <ClientOnly>
          <EditMap />
          <EditPlayer />
          <EditCargo
            v-for="cargo in editCargoStore.cargos"
            :key="cargo.id"
            :cargo
          />
          <EditTarget
            v-for="target in editTargetStore.targets"
            :key="target.id"
            :target
          />
        </ClientOnly>
      </div>
      <div>data show zone</div>
    </div>
    <div><EditSelectElement /></div>
  </div>
</template>

<style scoped>
</style>
