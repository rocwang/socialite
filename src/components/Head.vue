<template>
  <teleport to="head">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>上海名媛3群邀请函</title>
    <meta name="theme-color" content="#1e1e20" />
    <link rel="author" href="https://space.bilibili.com/700294461" />
    <link rel="icon" :href="favicon" />
  </teleport>
</template>

<script>
import favicon from "@/assets/favicon.png";

export default {
  name: "Head",
  setup() {
    return { favicon };
  }
};
</script>
