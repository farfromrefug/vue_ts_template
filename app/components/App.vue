a<template>
    <Page ref="page" actionBarHidden="true">
        <ActionBar title="Test Page" />
        <TabView androidTabsPosition="bottom" ref="tabView">
            <TabViewItem title="Home">
                <Frame>
                    <Home/>
                </Frame>
            </TabViewItem>
            <TabViewItem title="Second">
                <Frame>
                    <Page>
                        <ActionBar title="Second Page" />
                        <GridLayout>
                            <Label text="Default Page Content2" />
                        </GridLayout>
                    </Page>
                </Frame>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script lang="ts">
import BaseVueComponent from "./BaseVueComponent"
import { Component } from "vue-property-decorator"
import { Frame } from "ui/frame/frame"
import { TabView } from "ui/tab-view/tab-view"
import Vue from "nativescript-vue"
import Home from "./Home.vue"

@Component({
    components:{
        Home:Home
    }
})
export default class App extends BaseVueComponent {
    constructor() {
        super()
    }
    mounted() {
        super.mounted()
        // console.log('test log', Home)
        // setTimeout(
        //     () =>
        //         this.$navigateTo(Login, {
        //             animated: false
        //         }),
        //     0
        // )
    }
    getTabView() {
        return (this.getRef('tabView') as TabView)
    }
    // getCurrenFrame() {
    //     const tabView = this.getTabView();
    //     return tabView.items[tabView.selectedIndex].getViewById('frame');
    // }
    // onNavigatingTo() {
        // this.$navigateTo(Login, {
        //         animated: false
        //     })
        // setTimeout(() =>
        //     this.$navigateBack(), 5000)
    // }
}
</script>
