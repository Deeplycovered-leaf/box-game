<script lang="ts" setup>
import type { Cargo } from '~/store'

const props = defineProps<{
  cargo: Cargo
}>()

const { position } = usePosition(props.cargo)
</script>

<template>
  <div absolute :style="position">
    <IconCargoOn v-if="cargo.isOnTarget" />
    <IconCargo v-else />
  </div>
</template>
