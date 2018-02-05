<template>
	<div :class="cssClasses" role="alert">
		<p class="text-center">
			<app-icon :img="getIcon"></app-icon>
			{{ msg }}
		</p>
	</div>
</template>

<script>
	import Icon from './Icon.vue'

	export default {
		data() {
			return {
				icons: {
					warning: 'exclamation-sign',
					success: 'ok-sign',
					danger: 'remove-sign',
					info: 'info-sign'
				}
			}
		},
		components: {
			'app-icon': Icon
		},
		props: ['msg', 'type', 'icon'],
		computed: {
			cssClasses() {
				return 'alert alert-'+ (this.type ? this.type : 'warning');
			},
			getIcon() {
				if (this.icon) {
					return this.icon;
				}

				if (this.icons[this.type]) {
					return this.icons[this.type];
				}

				return 'exclamation-sign';
			}
		}
	}
</script>