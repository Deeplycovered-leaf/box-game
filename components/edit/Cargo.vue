<script lang="ts" setup>
import { STEP_EDIT } from '~/constants'
import { type EditCargo, useEditCargoStore } from '~/store'

const props = defineProps<{
  cargo: EditCargo
}>()

const { position } = usePosition(props.cargo, STEP_EDIT)
const editCargoStore = useEditCargoStore()
</script>

<template>
  <IconCargo
    class="b b-white" absolute :style="position"
    @dblclick="editCargoStore.removeCargo(props.cargo)"
  />
</template>
