<template>

  <div class="editor">
    <textarea placeholder="MarkDown Editor..." v-model="text" cols="30" rows="10"  class="editor__input"></textarea>
    <preview :content="text"></preview>
  </div>

</template>

<script src='./js/index.js'></script>

<style src='./css/style.css'></style>
