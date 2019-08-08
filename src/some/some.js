import Vue from "vue"
import some from "./some.vue"

new Vue({
    el: "#some",
    template: "<some/>",
    components: {
        some
    }
})