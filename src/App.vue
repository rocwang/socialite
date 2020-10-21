<template>
  <div :class="$style.root">
    <Cover />
    <Details />
  </div>
</template>

<script>
import Cover from "@/components/Cover";
import Details from "@/components/Details";

export default {
  name: "App",
  components: { Cover, Details }
};
</script>

<style module>
.root {
  color: var(--color-white);
  font-family: fahkwang, "方正正纤黑简体", sans-serif;
}
</style>
