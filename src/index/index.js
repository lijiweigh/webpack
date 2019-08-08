import Vue from "vue"
import index from "./index.vue"
import touch from "vue-touch"

Vue.use(touch, {name: "v-touch"})

new Vue({
    render: h => h(index)
}).$mount("#index")
