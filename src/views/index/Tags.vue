<template>
    <div class="article-filter">
        <div class="filter-tags">
            <span>所有标签:</span>
            <template v-for=" tag in tags">
                <a-checkable-tag class="tags"
                                 :key="tag"
                                 :checked="selectedTags.indexOf(tag) > -1"
                                 @change="(checked) => handleChange(tag, checked)"
                >
                    {{tag}}
                </a-checkable-tag>
            </template>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Tags',
        data() {
            return {
                checked1: false,
                checked2: false,
                checked3: false,
                tags: ['Movies', 'Books', 'Music', 'Sports', 'dasd', 'dasdasdasdas', 'dasdasdq', 'qweqweqwe', 'eqwrqwr'],
                selectedTags: [],
            }
        },
        methods: {
            handleChange(tag, checked) {
                const {selectedTags} = this;
                const nextSelectedTags = checked
                    ? [...selectedTags, tag]
                    : selectedTags.filter(t => t !== tag);
                console.log('You are interested in: ', nextSelectedTags);
                this.selectedTags = nextSelectedTags;
            },
        },
    }
</script>