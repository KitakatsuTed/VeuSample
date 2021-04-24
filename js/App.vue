<template>
  <div id="container">
    <todo></todo>
    <countApp></countApp>
  </div>
</template>

<script>
  import Todo from './components/Todo'
  import CountApp from './components/CountApp'

  export default {
    components: {
      'countApp': CountApp,
      'todo': Todo
    }
  }
</script>