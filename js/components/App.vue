<template>
  <table>
    <!-- テーブルヘッダー -->
    <thead>
    <tr>
      <th class="id">ID</th>
      <th class="comment">コメント</th>
      <th class="state">状態</th>
      <th class="button">-</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.comment }}</td>
        <td class="state">
          <button>{{ todo.state }}</button>
        </td>
        <td class="button">
          <button>削除</button>
        </td>
      </tr>
    <!-- [1] ここに <tr> で ToDo の要素を1行づつ繰り返し表示したい -->
    </tbody>
  </table>
</template>

<script>
  export default {
    data: {
      todos: []
    }
  }
</script>