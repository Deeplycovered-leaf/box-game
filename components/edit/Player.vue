<script lang="ts" setup>
import { STEP_EDIT } from '~/constants'
import { useEditPlayerStore } from '~/store/editPlayer'

const editPlayerStore = useEditPlayerStore()
const { position } = usePosition(editPlayerStore.player, STEP_EDIT)
</script>

<template>
  <IconPlayer class="b b-white" absolute :style="position" />
</template>
