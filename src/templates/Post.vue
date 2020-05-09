<template>
  <Layout>
    <div class="post--single">
      <div class="post-title">
        <h1>{{ $page.post.title }}</h1>
        <p class="post-date">
          {{ $page.post.date }} | {{ $page.post.timeToRead }} min read
        </p>
      </div>
      <div class="post-content">
        <p v-html="$page.post.content" />
      </div>
      <hr />
      <!-- <div class="post__tags">
        <span class="post__tag" v-for="tag in $page.post.tags" :key="tag.id">
          {{ tag }}
        </span>
      </div> -->
      <!-- <div class="share-container">
        <span class="post-date">By, {{ $page.post.author }}</span>
        <button class="share-button" @click="share">
          <i class="las la-user-friends"></i>
          <span class="share__text">Share this article</span>
        </button>
      </div> -->
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    author
    tags
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  computed: {
    link() {
      return window.location.origin + window.location.pathname;
    },
  },

  methods: {
    share() {
      if (navigator.share) {
        navigator
          .share({
            title: "WebShare API Demo",
            url: this.link,
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        this.$copyText(this.link);
        alert("Link copied to clipboard!");
      }
    },
  },
};
</script>
