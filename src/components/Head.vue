<template>
  <teleport to="head">
    <meta name="theme-color" content="#1e1e20" />
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
