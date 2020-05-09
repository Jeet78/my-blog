<template>
  <main class="layout">
    <g-link to="/" class="link">View all articles</g-link>
    <slot />
    <!-- <div class="footer">
        <span>
          Built & Written with ❤️ by
        </span>
        <span class="name">Jeet kacha.</span>
      </div> -->
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Overpass:200,300,400,600,700,800,900&display=swap");

body {
  font-family: "overpass", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  /* line-height: 1.5; */
  min-height: 100vh;
  background: #e3f6f5;
}

.layout {
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding: 4em 0px;
  text-align: left;
  font-size: 1em;
  color: #2d334a;
  margin-top: auto;
  span:not(.name) {
    opacity: 0.8;
  }
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
