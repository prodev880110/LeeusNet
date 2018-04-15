<template>
<div id="app">
  <md-app md-waterfall  md-mode="fixed">
    <!-- The Top ToolBar -->
    <md-app-toolbar class="md-accent md-dense" md-elevation="3">
      <h3 class="md-title" style="flex: 1">{{title}}</h3>
    </md-app-toolbar>
    <!-- SIDEBAR -->
    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">LeeusNet</span>
      </md-toolbar>
      <md-list>
        <md-list-item to="/">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>
        <md-list-item to="/MarkDown">
          <md-icon>text_fields</md-icon>
          <span class="md-list-item-text">MarkDown</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</div>
</template>

<script>
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

export default {
  name: 'leeus-net',
  data() {
    return {
      title: new Date().toDateString()
    }
  }
}
</script>

<style>
/* CSS */
html,
body,
#app{
  height: 100%;
}
.md-app{
  height: inherit;
}
.md-drawer {
  width: 200px;
}
</style>
