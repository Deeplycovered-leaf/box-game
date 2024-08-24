<script lang="ts" setup>
import { STEP_EDIT } from '~/constants'
import type { EditCargo } from '~/store'

const props = defineProps<{
  cargo: EditCargo
}>()
const { position } = usePosition(props.cargo, STEP_EDIT)
</script>

<template>
  <IconCargo class="b b-white" absolute :style="position" />
</template>
