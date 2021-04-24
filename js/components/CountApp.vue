<template>
  <div>
    <div>
      {{ counterNum }}
      <button @click="countUp">カウントアップ</button>
    </div>
    <div>
      {{ countNum2 }}
      <button @click="numUp">ナンバーアップ</button>
    </div>
  </div>
</template>

<script>
  import counter from "../store/counter";
  import counter2 from "../store/counter2";

  export default {
    methods: {
      countUp() {
        counter.commit('increment')
      },
      numUp() {
        counter2.commit('increment')
      }
    },
    computed: {
      counterNum() {
        return counter.state.count
      },
      countNum2() {
        return counter2.state.count
      }
    }
  }
</script>

<style scoped>

</style>