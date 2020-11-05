<template>
  <teleport to="head" v-if="!serverRendered">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta name="theme-color" content="#1e1e20" />
    <meta name="description" content="名媛”群邀请函示例, by Roc Wang" />
    <title>上海名媛3群邀请函</title>
    <link rel="icon" :href="favicon" />
    <link rel="author" href="https://space.bilibili.com/700294461" />
  </teleport>
</template>

<script>
import favicon from "@/assets/favicon.png";

export default {
  name: "Head",
  setup() {
    return {
      favicon,
      serverRendered: document.body.dataset.serverRendered === "true"
    };
  }
};
</script>
