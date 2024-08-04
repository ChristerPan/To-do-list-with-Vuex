const { createApp } = Vue;




const app = createApp({

    data() {
        return {
            newTodo: '',
            filter: 'all',
        }
    },

    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.$store.commit('addTodo',
                    { text: this.newTodo.trim(), completed: false })
                this.newTodo = ''
            }
        },

        deleteTodo(index) {
            this.$store.commit('deleteTodo', index)
        },
    },

    computed: {
        todos() {
            return this.$store.getters.todos
        },

        filterTodos() {
            if (this.filter === 'all') {
                console.log(this.$store.getters.todos)
                return this.$store.getters.todos
            }
            else if (this.filter === 'active') {
                console.log(this.$store.getters.todos.filter(todo => !todo.completed))
                return this.$store.getters.todos.filter(todo => !todo.completed)
            }
            else if (this.filter === 'completed') {
                console.log(this.$store.getters.todos.filter(todo => todo.completed))
                return this.$store.getters.todos.filter(todo => todo.completed)
            }

        }
    },


})

app.use(store)
app.mount("#app")