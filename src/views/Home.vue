<template>
	<div class="container">
		<add-todo />
		<todos />
	</div>
</template>

<script>
	import AddTodo from '../components/AddTodo.vue';
	// @ is an alias to /src
	import Todos from '../components/Todos.vue';

	export default {
		name: 'Home',
		components: {
			Todos,
			AddTodo,
		},
	};
</script>
