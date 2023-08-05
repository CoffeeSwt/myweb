<script setup lang="ts">
// import { api } from "../api";
import { onMounted, reactive } from "vue";
import { load } from "jinrishici";
// const { login } = api;
const poem = reactive({
  content: null,
  author: null,
});
onMounted(() => {
  //   login({
  //     username: "Coffee",
  //     password: "123456",
  //   });
  load((res: any) => {
    const data = res.data;
    poem.content = data.content;
    poem.author = data.origin.author;
  });
});
</script>

<template>
  <div class="flex justify-center items-center h-40">
    <div class="flex flex-col items-center shadow p-5 rounded card-bg">
      <div>{{ poem.content }}</div>
      <div>——{{ poem.author }}</div>
    </div>
  </div>
</template>

<style scoped>
[data-theme="dark"] .card-bg {
  background-color: rgb(29, 40, 58);
  box-shadow: none;
}
[data-theme="dark"] .shadow {
  --tw-shadow: none;
  --tw-shadow-colored: none;
  box-shadow: none;
}
</style>
