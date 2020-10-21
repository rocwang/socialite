<template>
  <header :class="$style.root">
    <h1 :class="$style.title">
      邀请函 <small :class="$style.subtitle">上海名媛3群</small>
    </h1>

    <a href="#">
      <img
        src="https://via.placeholder.com/100"
        alt="二维码"
        :class="$style.qrcode"
      />
      <p :class="$style.text">请扫描二维码进群</p>
      <p :class="$style.text">诚邀您的莅临</p>
    </a>
  </header>
</template>

<script>
export default {
  name: "Cover",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
.root {
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  min-height: 100vh;
  background: url("../assets/rose.svg") no-repeat top -1vmin left -1vmin;
  background-size: 50vmin auto;
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

.qrcode {
  display: block;
  margin: 0 auto 1rem;
}

.text {
  font-size: 1.4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
</style>
