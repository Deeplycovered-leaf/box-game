<script lang="ts" setup>
import TargetImg from '~/assets/target.png'

const props = defineProps<{
  pos: Position
}>()

const { position } = usePosition(props.pos)
</script>

<template>
  <div absolute :style="position">
    <img :src="TargetImg" alt="target">
  </div>
</template>
