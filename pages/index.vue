<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <Suspense>
      <div>
        <Game />
      </div>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
