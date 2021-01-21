<template>
	<div id="nav">
		<router-link class="link" to="/">Home</router-link> |
		<router-link class="link" to="/about">About</router-link>
	</div>
	<router-view />
</template>

<style>
	body {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		line-height: 1.6;
		background: #e8f7f0;
	}

	.container {
		max-width: 1100px;
		margin: auto;
		overflow: auto;
		padding: 0 2rem;
	}
	#nav {
		max-width: 1100px;
		margin: auto;
		display: flex;
		justify-content: center;
	}
	.link {
		text-decoration: none;
		color: black;
		padding: 0 1rem;
		font-size: 18px;
	}
</style>
