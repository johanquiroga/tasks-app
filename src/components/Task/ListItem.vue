<template>
	<button type="button" @click="select" class="list-group-item task-list-item"
		:class="{ completed: !task.pending }">
		<a role="button" @click.stop="toggleStatus()">
			<app-icon :img="task.pending ? 'unchecked' : 'check'" aria-hidden="true"></app-icon>
		</a>

		<span class="description">{{ task.description }}</span>
	</button>
</template>

<script>
	import Icon from 'components/Commons/Icon.vue'

	export default {
		components: {
			'app-icon': Icon
		},
		data() {
			return {
				draft: ''
			};
		},
		template: '#task-template',
		props: ['task', 'index'],
		methods: {
			select() {
				this.$router.push('/tasks/'+this.task.id);
			},
			toggleStatus() {
				this.task.pending = !this.task.pending;
			}
		}
	}
</script>

<style lang="scss">
	.list-group-item.task-list-item {
	    display: flex;
	    justify-content: space-between;

	    a {
			text-decoration: none;
		}

		.description {
		    flex: 1;
		    padding: 0 5px;
		}

		&.completed {
			&, a {
				color: #999;
			}

			.description {
				text-decoration: line-through;
			}
		}
	}
</style>