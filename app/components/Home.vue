<template>
    <Page ref="page">
        <ActionBar title="Home Page" />
        <StackLayout>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import BaseVueComponent from "./BaseVueComponent"
import { Component } from "vue-property-decorator"
import Vue from "nativescript-vue"

@Component({
})
export default class Home extends BaseVueComponent {

}
</script>
