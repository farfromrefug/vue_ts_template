import Vue from "nativescript-vue"

import "./styles.scss"
import { isAndroid, isIOS } from "platform"

import View from './native'
console.log(View)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false;
Vue.config['debug'] = false;
Vue.config.errorHandler = (e, vm, info) => {
    console.log('+'.repeat(80));
    console.log(e, vm, info);
    console.dir(e);
    console.log('+'.repeat(80));
};


import App from "~/components/App.vue"

Vue.prototype.$isAndroid = isAndroid
Vue.prototype.$isIOS = isIOS

new Vue({
    render: h => {
        return h("frame", [h(App )])
    }
}).$start()
