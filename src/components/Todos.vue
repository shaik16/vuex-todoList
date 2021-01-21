<template>
	<h1>Todos</h1>
	<div class="todos">
		<div class="todo" v-for="allTodo in allTodos" :key="allTodo.id">
			{{ allTodo.title }}
			<i @click="deleteTodo(allTodo.id)" class="fas fa-trash-alt"></i>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'todos',
		methods: mapActions(['fetchTodos', 'deleteTodo']),
		computed: mapGetters(['allTodos']),
		created() {
			this.fetchTodos();
		},
	};
</script>

<style scoped>
	.todos {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
	}

	.todo {
		border: 1px solid #ccc;
		background: #41b883;
		padding: 1rem;
		border-radius: 5px;
		text-align: center;
		position: relative;
		cursor: pointer;
	}
	i {
		position: absolute;
		bottom: 10px;
		right: 10px;
		color: #fff;
		cursor: pointer;
	}
</style>
