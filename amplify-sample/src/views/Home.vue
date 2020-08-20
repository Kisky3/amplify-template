<template>
  <div class="home">
       <h1>ログイン済</h1>
        <!--ログアウトコンポーネント-->
        <amplify-sign-out></amplify-sign-out>
      <new-todo></new-todo>
      <amplify-connect :query="listTodosQuery"
          :subscription="createTodoSubscription"
          :onSubscriptionMsg="onCreateTodo">
        <template slot-scope="{loading, data, errors}">
          <div v-if="loading">Loading...</div>
          <div v-else-if="errors.length > 0"></div>
          <div v-else-if="data">
            <TodoList :items="data.listTodos.items"></TodoList>
          </div>
        </template>
      </amplify-connect>
      <h1>AllList</h1>
      <amplify-connect :query="listSortedByStatusQuery">
        <template slot-scope="{loading, data, errors}">
          <div v-if="loading">Loading...</div>
          <div v-else-if="errors.length > 0">{{errors}}{{data}}</div>
          <div v-else-if="data">
             {{data}}
            <TodoList :items="data.items"></TodoList>
          </div>
        </template>
      </amplify-connect>
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue';
import TodoList from '@/components/TodoList.vue';
import NewTodo from '@/components/NewTodo.vue';

const ListSortedByStatusQuery = `query ListSortedByStatus {
    listSortedByStatus {
      items {
        recycle_request_id
        dead_line
      }
    }
  }`;

const ListTodosQuery = `query ListTodos {
    listTodos {
      items {
        id
        name
      }
    }
  }`;

  const OnCreateTodoSubscription = `subscription OnCreateTodo {
      onCreateTodo {
        id
        name
      }
    }`;

export default {
  name: 'home',
  components: {
    NewTodo,
    TodoList,
    ...components
  },
  computed: {
    listTodosQuery() {
      return this.$Amplify.graphqlOperation(ListTodosQuery);
    },
    listSortedByStatusQuery() {
      return this.$Amplify.graphqlOperation(ListSortedByStatusQuery, {bid_status: "ACTIVE", sortDirection: "ASC"});
    },
    createTodoSubscription() {
      return this.$Amplify.graphqlOperation(OnCreateTodoSubscription);
    }
  },
  methods: {
    onCreateTodo(prevData, newData) {
      console.log('New todo from subscription...');
      const newTodo = newData.onCreateTodo;
      prevData.data.listTodos.items.push(newTodo);
      return prevData.data;
    }
  }
}
</script>