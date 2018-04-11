<template>
<div id="app">
  <md-app md-waterfall  md-mode="fixed">
    <!-- The Top ToolBar -->
    <md-app-toolbar class="md-accent md-medium md-dense" md-elevation="3">
      <h3 class="md-title" style="flex: 1">{{title}}</h3>
      <md-button>Refresh</md-button>
      <md-button>Create</md-button>
    </md-app-toolbar>
    <!-- SIDEBAR -->
    <md-app-drawer md-permanent="clipped" md-fixed>
      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text" to="/">Inbox</span>
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
  items: [{
      title: 'Home',
      to: '/'
    },
    {
      icon: 'bubble_chart',
      title: 'About',
      to: '/About'
    }
  ],
  name: 'leeus-net',
  data() {
    return {
      title: "LeeusNet"
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
  background-color: #fff;
}
.md-app{
  height: inherit;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-button-content {
    color: #fff;
}
</style>
