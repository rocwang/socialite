<template>
  <Head />
  <Cover />
  <Details />
</template>

<script>
import Cover from "@/components/Cover";
import Details from "@/components/Details";
import Head from "@/components/Head";

export default {
  name: "App",
  components: { Cover, Details, Head }
};
</script>

<style src="./assets/reset.css" />

<style>
@font-face {
  font-family: fahkwang;
  src: url(./assets/Fahkwang-Regular.woff2) format("woff2");
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
}

@font-face {
  font-family: "方正正纤黑简体";
  src: url("./assets/方正正纤黑简体.woff2") format("woff2");
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
}

:root {
  --color-gold: #d9cb9e;
  --color-black: #1e1e20;
  --color-white: #fff;
}

:root,
#app {
  scroll-snap-type: y mandatory;
}

#app > * {
  scroll-snap-align: start;
}

#app {
  background: url(./assets/black_paper.png) var(--color-black) repeat top left;
  color: var(--color-white);
  font-family: fahkwang, "方正正纤黑简体", sans-serif;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  #app {
    background-image: url(./assets/black_paper_@2X.png);
    background-size: 400px 400px;
  }
}

noscript {
  display: grid;
  place-content: center;
  min-height: 100vh;
}
</style>
