<script lang="ts" setup>
import { STEP_EDIT } from '~/constants'
import { type EditTarget, useEditTargetStore } from '~/store'

const props = defineProps<{
  target: EditTarget
}>()

const { position } = usePosition(props.target, STEP_EDIT)
const editTargetStore = useEditTargetStore()
</script>

<template>
  <IconTarget
    class="b b-white" absolute :style="position"
    @dblclick="editTargetStore.removeTarget(props.target)"
  />
</template>
