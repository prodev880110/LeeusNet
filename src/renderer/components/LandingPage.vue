<template>
<div id="wrapper">
  <div>
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{socketMessage}}"</p>
    <button @click="pingServer()">Ping Server</button>
  </div>
</div>
</template>

<script src='./LandingPage/js/index.js'></script>

<style src='./LandingPage/css/style.css'></style>
