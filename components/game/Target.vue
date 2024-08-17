<script lang="ts" setup>
const props = defineProps<{
  pos: Position
}>()

const { position } = usePosition(props.pos)
</script>

<template>
  <IconTarget absolute :style="position" />
</template>
