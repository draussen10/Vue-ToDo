const App = {
	data(){
		return {
			title: 'Список дел',
			placeholderName: 'Введите название дела',
			inputValue: '',
			todos: ['Заметка 1', 'Заметка 2']
		}
	},
	methods: {
		addNewTodo() {
			if (this.inputValue !== ''){
				this.todos.push(this.inputValue)
				this.inputValue = ''
			}
		},
		toUpperCase(item) {
			return item.toUpperCase()
		},
		remoteTodo(index) {
			this.todos.splice(index, 1)
		}
	},
	computed: {
		doubleCountComputed() {
			console.log('doubleCountComputed')
			return this.todos.length * 2
		}
	},
	watch: {
		inputValue(value) {
			if (value.length > 10){
				this.inputValue = ''
			}
		}
	}
}

const app = Vue.createApp(App)

app.mount('#app')