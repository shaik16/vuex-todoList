import axios from 'axios';

const state = {
	todos: [],
	buttonStatus: 'Add to do',
};

const getters = {
	allTodos(state) {
		return state.todos;
	},
	getButtonStatus(state) {
		return state.buttonStatus;
	},
};

const actions = {
	async fetchTodos({ commit }) {
		const response = await axios({
			method: 'get',
			url: 'https://jsonplaceholder.typicode.com/todos',
		});

		commit('setTodos', response.data);
	},
	async addTodo({ commit }, title) {
		commit('buttonWait');
		const response = await axios({
			method: 'post',
			url: 'https://jsonplaceholder.typicode.com/todos',
			data: {
				title,
				completed: false,
			},
		});
		commit('newTodo', response.data);
		commit('buttonSuccess');
	},
};

const mutations = {
	buttonWait(state) {
		return (state.buttonStatus = 'please wait ...');
	},
	buttonSuccess(state) {
		return (state.buttonStatus = 'Add to do');
	},
	setTodos(state, todos) {
		return (state.todos = todos);
	},
	newTodo(state, todo) {
		return state.todos.unshift(todo);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
