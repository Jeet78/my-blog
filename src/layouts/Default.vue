<template>
  <transition name="fade" appear>
    <main class="layout">
      <!-- a wrapper for slot is needed -->
      <slot />
      <!-- the content -->
    </main>
  </transition>
</template>

<style lang="scss">
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
