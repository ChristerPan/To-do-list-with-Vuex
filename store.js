const { createStore } = Vuex;

const store = createStore({
    state() {
        return {
            todos: [],
        }
    },

    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo)
        },

        deleteTodo(state, index) {
            state.todos.splice(index, 1)
        },
    },

    getters: {
        todos: state => state.todos
    }
})

