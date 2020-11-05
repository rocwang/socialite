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
  src: url(./assets/Fahkwang-Regular-subset.woff2) format("woff2");
  unicode-range: U+20, U+2C, U+2F, U+33, U+3F, U+44, U+46, U+48, U+57, U+59,
    U+61, U+62, U+64, U+65, U+67-69, U+6C-6F, U+72-75, U+77, U+79, U+3002,
    U+4E00, U+4E07, U+4E09-4E0B, U+4E0D, U+4E13, U+4E34, U+4E3B, U+4E66, U+4E8C,
    U+4E8E, U+4E92, U+4EA4, U+4EA7, U+4EAB, U+4ED9, U+4EE5, U+4EEC, U+4EF6,
    U+4F18, U+4F1A, U+4F53, U+4F60, U+4F88, U+5165, U+5171, U+51FD, U+5206,
    U+5230, U+5348, U+535A, U+5361, U+53CB, U+53EF, U+540C, U+540D, U+548C,
    U+54C1, U+5708, U+5728, U+5730, U+5751, U+57FA, U+5927, U+5962, U+5973,
    U+5979, U+5A9B, U+5B50, U+5B66, U+5B8C, U+5B9A, U+5C0F, U+5C5E, U+5DE8,
    U+5E74, U+5F52, U+5F55, U+5F69, U+5FAE, U+60A8, U+6253, U+626B, U+627E,
    U+6311, U+63A2, U+63A5, U+63A8, U+63CF, U+660E, U+66F4, U+6709, U+671F,
    U+672C, U+673A, U+6761, U+6807, U+6D3B, U+6D41, U+6D77, U+724C, U+751F,
    U+7537, U+7559, U+767E, U+7684, U+76EE, U+76F4, U+76F8, U+7801, U+7840,
    U+793E, U+7B49, U+7CBE, U+7EA2, U+7EA6, U+7EA7, U+7ED3, U+7EF4, U+7F8E,
    U+7FA4, U+81F4, U+82F1, U+8336, U+8385, U+878D, U+89C2, U+8BA8, U+8BB0,
    U+8BC1, U+8BC6, U+8BDA, U+8BDD, U+8BF7, U+8D28, U+8D39, U+8D44, U+8D77,
    U+8DF3, U+8F7B, U+8FC7, U+8FD9, U+8FDB, U+9009, U+907F, U+9080, U+91CC,
    U+91D1, U+9876, U+996D, U+9AD8, U+FF0C, U+FF1A;
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
}

@font-face {
  font-family: "FZZhengHeiS-EL-GB";
  src: url(./assets/FZZhengHeiS-EL-GB-subset.woff2) format("woff2");
  unicode-range: U+20, U+2C, U+2F, U+33, U+3F, U+44, U+46, U+48, U+57, U+59,
    U+61, U+62, U+64, U+65, U+67-69, U+6C-6F, U+72-75, U+77, U+79, U+3002,
    U+4E00, U+4E07, U+4E09-4E0B, U+4E0D, U+4E13, U+4E34, U+4E3B, U+4E66, U+4E8C,
    U+4E8E, U+4E92, U+4EA4, U+4EA7, U+4EAB, U+4ED9, U+4EE5, U+4EEC, U+4EF6,
    U+4F18, U+4F1A, U+4F53, U+4F60, U+4F88, U+5165, U+5171, U+51FD, U+5206,
    U+5230, U+5348, U+535A, U+5361, U+53CB, U+53EF, U+540C, U+540D, U+548C,
    U+54C1, U+5708, U+5728, U+5730, U+5751, U+57FA, U+5927, U+5962, U+5973,
    U+5979, U+5A9B, U+5B50, U+5B66, U+5B8C, U+5B9A, U+5C0F, U+5C5E, U+5DE8,
    U+5E74, U+5F52, U+5F55, U+5F69, U+5FAE, U+60A8, U+6253, U+626B, U+627E,
    U+6311, U+63A2, U+63A5, U+63A8, U+63CF, U+660E, U+66F4, U+6709, U+671F,
    U+672C, U+673A, U+6761, U+6807, U+6D3B, U+6D41, U+6D77, U+724C, U+751F,
    U+7537, U+7559, U+767E, U+7684, U+76EE, U+76F4, U+76F8, U+7801, U+7840,
    U+793E, U+7B49, U+7CBE, U+7EA2, U+7EA6, U+7EA7, U+7ED3, U+7EF4, U+7F8E,
    U+7FA4, U+81F4, U+82F1, U+8336, U+8385, U+878D, U+89C2, U+8BA8, U+8BB0,
    U+8BC1, U+8BC6, U+8BDA, U+8BDD, U+8BF7, U+8D28, U+8D39, U+8D44, U+8D77,
    U+8DF3, U+8F7B, U+8FC7, U+8FD9, U+8FDB, U+9009, U+907F, U+9080, U+91CC,
    U+91D1, U+9876, U+996D, U+9AD8, U+FF0C, U+FF1A;
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
body {
  scroll-snap-type: y mandatory;
}

body > * {
  scroll-snap-align: start;
}

body {
  background: url(./assets/glamorous.svg), var(--color-black);
  background-size: 180px 180px;
  color: var(--color-white);
  font-family: fahkwang, "FZZhengHeiS-EL-GB", sans-serif;
}
</style>
