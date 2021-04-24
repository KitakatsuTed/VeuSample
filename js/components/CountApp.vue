<template>
  <div>
    <div>
      {{ counter.count1 }}
      <button @click="countUp">カウントアップ</button>
    </div>
    <div>
      <button @click="countUpAsync">非同期カウント</button>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  import { mapActions } from "vuex"

  export default {
    methods: {
      ...mapActions('counter', [
        'increment',
        'incrementAsync'
      ]),
      countUp() {
        this.increment()
      },
      countUpAsync() {
        this.incrementAsync()
      }
    },
    computed: {
      ...mapState(["counter"])
    }
  }
</script>

<style scoped>

</style>