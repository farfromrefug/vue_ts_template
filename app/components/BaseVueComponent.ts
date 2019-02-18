import Vue, { NativeScriptVue } from 'nativescript-vue';
import { Page } from "tns-core-modules/ui/page/page"
import { isIOS, isAndroid } from "tns-core-modules/platform/platform"

export default class BaseVueComponent extends Vue {
    $refs: {
        page: NativeScriptVue<Page>
    }
    public isAndroid = isAndroid
    public isIOS = isIOS
    get page() {
      return this.getRef('page');
    }
    getRef(key: string) {
        if (this.$refs[key]) {
            return this.$refs[key].nativeView
        }
    }
    mounted() {
        const page = this.page
        if (this.page) {
            page.backgroundSpanUnderStatusBar = true
        }
    }
}
