<template>
  <div id="app">
    Hello World!

    <p style="padding:20px 0;">
      <router-link to="/foo">Go To Foo</router-link>
      <router-link to="/bar">Go To Bar</router-link>
    </p>

    <router-view />
  </div>
</template>

<script>
  export default {

  };
</script>