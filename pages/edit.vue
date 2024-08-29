<script lang="ts" setup>
import { useEditCargoStore, useEditTargetStore } from '~/store'

const editCargoStore = useEditCargoStore()
const editTargetStore = useEditTargetStore()
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div>
          <div flex>
            <div class="relative w-2/3 bg-red">
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
            </div>
            <div class="w-1/3">
              <EditDataDisplay />
            </div>
          </div>
          <div><EditSelectElement /></div>
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
</style>
