<template>
  <div>
    <label v-for="option in options">
      <input type="radio"
             v-model="currentOption"
             :value="option.value">{{ option.label }}
    </label>
    <div>{{ computedTodos.length }}件を表示中</div>

    <table>
      <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">コメント</th>
        <th class="state">状態</th>
        <th class="button">-</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="todo in computedTodos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.comment }}</td>
          <td class="state">
            <button @click="doChange(todo)">{{ todo.state }}</button>
          </td>
          <td class="button">
            <button @click="doRemove(todo)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>新しい作業の追加</h2>
    <form class="add-form" @submit.prevent="doAdd">
      コメント<input type="text" ref="comment">
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
  import TodoStorage from '../TodoStrage'

  export default {
    data() {
      return {
        todos: [],
        options: [
          { value: 0, label: 'すべて' },
          { value: 1, label: '作業中' },
          { value: 2, label: '完了' }
        ],
        currentOption: 0
      }
    },
    created() {
      this.todos = TodoStorage.fetch()
    },
    methods: {
      doAdd(_event, _value) {
        const comment = this.$refs.comment

        if(!comment.value.length) { return }

        this.todos.push({
          id: TodoStorage.uid++,
          comment: comment.value,
          state: 0
        })
        comment.value = ''
      },
      doChange(item) {
        item.state = item.state ? 0 : 1
      },
      doRemove(item) {
        const index = this.todos.indexOf(item)
        this.todos.splice(index, 1)
      }
    },
    watch: {
      todos: {
        handler: function (todos) {
          TodoStorage.save(todos)
        },
        deep: true
      }
    },
    computed: {
      computedTodos() {
        return this.todos.filter(function(el) {
          if (this.currentOption === 0) {
            return true
          } else if (this.currentOption === 1) {
            return el.state === 0
          } else if (this.currentOption === 2) {
            return el.state === 1
          }
        }, this)
      }
    }
  }
</script>