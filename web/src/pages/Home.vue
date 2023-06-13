<script setup lang="ts">
import { ref } from "vue";
import { MdPreview } from "md-editor-v3";
// preview.css相比style.css少了编辑器那部分样式
import "md-editor-v3/lib/preview.css";

const id = "preview-only";
const text = ref("# Hello Editor");
</script>

<template>
  <div class="bg-slate-300">
    <MdPreview :editorId="id" :modelValue="text" />
  </div>
</template>

<style scoped></style>
