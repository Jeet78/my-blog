<template>
  <div class="post-lists">
    <div class="post">
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

      <g-link :to="post.path" class="post__button">Read Full Article </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
