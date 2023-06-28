<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const name = ref("");
const updatablog = async (newName: string) => {
  name.value = newName as string;
};

watchEffect(async () => {
  await updatablog(route.params.name as string);
});
</script>

<template>
  <div>{{ name }}</div>
</template>

<style scoped></style>
