<script lang="ts" setup>

</script>

<template>
  <div>
    <div flex>
      <div class="relative w-2/3 bg-red">
        <ClientOnly>
          <EditMap />
          <EditPlayer />
        </ClientOnly>
      </div>
      <div>data show zone</div>
    </div>
    <div><EditSelectElement /></div>
  </div>
</template>

<style scoped>
</style>
