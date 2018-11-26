<template>
    <p>{{typedText}}</p>
</template>

<script>
export default {
    name: "typewriter",
    props: [ "textInput" ],
    data() {
        return {
            index: 0
        }
    },
    methods: {
        type() {
            this.index++;
            if (this.index < this.textInput.length) {
                setTimeout(this.type, Math.random(1)*50);
            } else {
                this.$emit("onFinishedTyping");
            }
        }
    },
    computed: {
        typedText() {
           return this.textInput.substr(0,this.index);
        }
    },
    mounted() {
        this.type();
    }
}
</script>
