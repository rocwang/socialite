<template>
  <header :class="$style.root">
    <h1 :class="$style.title">
      邀请函
      <small :class="$style.subtitle">上海名媛3群</small>
    </h1>

    <a href="https://socialite.kiwiberry.nz/">
      <QRCode :class="$style.qrcode" />
      <p :class="$style.text">请扫描二维码进群</p>
      <p :class="$style.text">诚邀您的莅临</p>
    </a>
  </header>
</template>

<script>
import QRCode from "@/components/QRCode";

export default {
  name: "Cover",
  components: { QRCode }
};
</script>

<style module>
.root {
  display: grid;
  place-content: center;
  text-align: center;
  min-height: 100vh;
}

.title {
  color: var(--color-gold);
  font-size: 7rem;
  margin-bottom: 7rem;
  font-weight: 400;
}

.subtitle {
  display: block;
  font-size: 3rem;
  margin-top: 2rem;
}

.text {
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
</style>
