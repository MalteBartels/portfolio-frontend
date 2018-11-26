<template>
    <a :class="{ 'animate-slidein': isVisible }" :href="url">
        <img :src="require(`../assets/${img}`)" @load="animateIn">
    </a>
</template>

<script>
export default {
    name: "Link",
    props: [ "url", "img", "offset" ],
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        animateIn() {
            setTimeout(() => this.isVisible = true, this.offset);
        }
    }
}
</script>

