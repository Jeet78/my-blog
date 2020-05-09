<template>
  <div class="post-lists">
    <g-link class="post" :to="post.path">
      <h3 class="post__title" v-html="post.title" />
      <p class="post__description" v-html="post.description" />
      <div class="post__tags">
        <span class="post__tag" v-for="tag in post.tags" :key="tag.id">
          {{ tag }}
        </span>
      </div>
      <div class="post__data">
        <p class="post__date" v-html="post.date" />
        <p class="post__readtime">{{ post.timeToRead }} mins read</p>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
