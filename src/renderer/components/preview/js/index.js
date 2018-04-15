import marked from 'marked';
export default {
	name: 'preview',
	props:['content'],
	computed: {
		markdownText (){
			return marked(this.content, {sanitize: true})
		}
	}
}
