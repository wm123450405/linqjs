<template>
    <div>
        <h3>{{ meta.title }}</h3>
        <div v-for="description in meta.descriptions" v-html="description" class="text-success"></div>
        <h4>{{ caption.contructors }}</h4>
        <div v-if="meta.contructors">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td>{{ caption.contructor }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contructor in meta.contructors">
                        <td>
                            <lang-link :to="`${ name }/contructor`">{{ meta.name || name }}(<span v-for="(parameter, index) in contructor.parameters"><span v-if="index !== 0">, </span>{{ parameter }}</span>)</lang-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4>{{ caption.properties }}</h4>
        <div v-if="meta.properties">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <td></td>
                        <td>{{ caption.property }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="property in meta.properties">
                        <td>
                            <span v-if="property.static">S</span>
                        </td>
                        <td>
                            <lang-link :to="`${ name }/property/${ property.name }`">{{ property.name }}</lang-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4>{{ caption.methods }}</h4>
        <div v-if="meta.methods">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <td></td>
                    <td>{{ caption.method }}</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="method in meta.methods">
                    <td>
                        <span v-if="method.static">S</span>
                    </td>
                    <td>
                        <lang-link :to="`${ name }/method/${ method.name }`">{{ method.name }}(<span v-for="(parameter, index) in method.parameters"><span v-if="index !== 0">, </span>{{ parameter }}</span>)</lang-link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-for="remark in meta.remarks" v-html="remark" class="text-info"></div>
        <div v-for="warning in meta.warnings" v-html="warning" class="text-warning"></div>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				caption: { },
				meta: { }
			};
        },
        computed: {
			name() {
				return this.$route.params.class;
            }
        },
        mounted() {
			this.getJson(`class`, `apis/${ this.name }`).then(([caption, meta]) => {
				this.caption = caption;
				this.meta = meta;
			});
        }
    };
</script>