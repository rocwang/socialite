<template>
  <Cover />
  <Details />
</template>

<script>
import Cover from "@/components/Cover";
import Details from "@/components/Details";

export default {
  name: "App",
  components: { Cover, Details }
};
</script>

<style>
:root,
#app {
  scroll-snap-type: y mandatory;
}

#app {
  color: var(--color-white);
  font-family: fahkwang, "方正正纤黑简体", sans-serif;
}

#app > * {
  scroll-snap-align: start;
}
</style>
