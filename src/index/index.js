import Vue from "vue"
import index from "./index.vue"
import touch from "vue-touch"
import Fastclick from "fastclick"
import vConsole from "vconsole"
const vconsole = new vConsole()

Fastclick.attach(document.body)

Vue.use(touch, {name: "v-touch"})

new Vue({
    render: h => h(index)
}).$mount("#index")
