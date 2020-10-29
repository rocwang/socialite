<template>
  <main :class="$style.root">
    <p :class="$style.slogan"><strong>Young, Fashionable, Wealthy</strong></p>

    <p :class="$style.text">目标群体：上海本地名媛</p>
    <p :class="$style.text">入会条件：资产证明 / 基础入会费</p>

    <h2 :class="$style.h2">What would you get?</h2>

    <h3 :class="$style.h3">奢侈品交流分享</h3>

    <p :class="$style.text">
      年轻仙女们的专属的奢侈品交流基地，和群友一起探讨Hermes，Dior等奢侈品大牌，完美避坑。
    </p>

    <h3 :class="$style.h3">相约下午茶话会</h3>

    <p :class="$style.text">
      和群友一起打卡上海顶级下午茶，在这里你可以找到三观一致的群友共同约饭，更有机会结识百万小
      红书/微博博主，和她们一起记录精彩生活。
    </p>

    <h3 :class="$style.h3">结交金融巨子</h3>

    <p :class="$style.text">
      群友不定期互推高品质优质男生，跳过挑选直接结交金融巨子，留学海归等社会精英，专属圈子属于
      专属的你。
    </p>
  </main>
</template>

<script>
export default {
  name: "Details",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module>
.root {
  display: grid;
  place-content: center;
  padding: 30px;
  min-height: 100vh;
  background: url("../assets/rose.svg") no-repeat bottom -1vmin right -1vmin;
  background-size: 50vmin auto;
  grid-template-columns: minmax(260px, 640px);
}

.slogan {
  color: var(--color-gold);
  font-size: calc(2rem + 1.8vw);
  margin-bottom: 4rem;
  text-align: center;
}

.slogan strong {
  font-weight: 400;
}

.h2 {
  color: var(--color-gold);
  font-size: calc(2rem + 1.3vw);
  text-align: center;
  margin: 3rem 0 1rem;
  font-weight: 400;
}

.h3 {
  color: var(--color-gold);
  font-size: calc(1.8rem + 0.8vw);
  margin: 3rem 0 1rem;
  font-weight: 400;
}

.text {
  font-size: calc(1.4rem + 0.5vw);
  line-height: 1.2;
  margin-bottom: 1rem;
}
</style>
