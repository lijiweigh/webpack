<template>
    <div class="index">
        <v-touch class="touch" @swipeleft="swipeleft" @swiperight="swiperight"></v-touch>
    </div>
</template>

<script>
export default {
    name: "index",
    mounted() {
        console.log("index")
        console.log(process.env.NODE_ENV)
    },
    methods: {
        swipeleft(e) {
            console.log("swipeleft")
            console.log(e)
        },
        swiperight(e) {
            console.log("swiperight-f1-")
            console.log(e)
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../style/reset.css");
.touch{
    width: 90%;
    margin: 0 auto;
    height: 500px;
    background: skyblue;
}
</style>

