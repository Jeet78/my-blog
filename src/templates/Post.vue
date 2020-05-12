<template>
  <Layout>
    <div class="post--single">
      <g-link to="/" class="link">
        <i class="las la-arrow-left"></i> View all articles
      </g-link>
      <div class="post-title">
        <h1>{{ $page.post.title }}</h1>
        <p class="post-date">{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
      </div>
      <div class="post-image">
        <img src="../../content/images/blog.jpg" alt />
      </div>
      <div class="post-content">
        <div v-html="$page.post.content"></div>
      </div>
      <hr />
      <div class="post__tags">
        <span class="post__tag" v-for="tag in $page.post.tags" :key="tag.id">{{ tag }}</span>
      </div>
      <div class="share-container">
        <span class="post-date">By, {{ $page.post.author }}</span>
        <button class="share-button" @click="share">
          <i class="las la-user-friends"></i>
          <span class="share__text">Share this article</span>
        </button>
      </div>
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
      title: ""
    };
  },
  computed: {
    link() {
      return window.location.origin + window.location.pathname;
    }
  },

  methods: {
    share() {
      if (navigator.share) {
        navigator
          .share({
            title: "WebShare API Demo",
            url: this.link
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      } else {
        this.$copyText(this.link);
        alert("Link copied to clipboard!");
      }
    }
  }
};
</script>

<style lang="scss">
.post--single {
  margin-bottom: 50px;
}

.link {
  color: #272343;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.5;
  margin-top: 30px;
  display: inline-block;
  // border-bottom: 1px solid transparent;
  i {
    padding-right: 6px;
    transition: all 0.3s ease;
  }
  &:hover {
    opacity: 1;
  }
}

.post-title {
  text-align: left;
  line-height: auto;
  padding: 1em 0;
  margin-bottom: 0px;
  color: #272343;
  h1 {
    font-family: "nunito";
    letter-spacing: -1px;
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 0px;
  }
  @media (max-width: 450px) {
    padding: 0.5em 0;
    h1 {
      font-size: 40px;
    }
  }
}
$radius: 10px;

.post-image {
  position: relative;
  overflow: hidden;
  border-radius: $radius;
  max-height: 380px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: $radius;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: $radius;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);

    background-image: linear-gradient(
      to bottom,
      hsla(210.59, 100%, 10%, 0) 0%,
      hsla(210.59, 100%, 10%, 0.01) 8%,
      hsla(210.59, 100%, 10%, 0.037) 15.2%,
      hsla(210.59, 100%, 10%, 0.08) 21.8%,
      hsla(210.59, 100%, 10%, 0.135) 27.9%,
      hsla(210.59, 100%, 10%, 0.2) 33.7%,
      hsla(210.59, 100%, 10%, 0.271) 39.2%,
      hsla(210.59, 100%, 10%, 0.347) 44.7%,
      hsla(210.59, 100%, 10%, 0.423) 50.1%,
      hsla(210.59, 100%, 10%, 0.499) 55.7%,
      hsla(210.59, 100%, 10%, 0.57) 61.6%,
      hsla(210.59, 100%, 10%, 0.635) 67.9%,
      hsla(210.59, 100%, 10%, 0.69) 74.8%,
      hsla(210.59, 100%, 10%, 0.733) 82.4%,
      hsla(210.59, 100%, 10%, 0.76) 90.7%,
      hsla(210.59, 100%, 10%, 0.77) 100%
    );
  }
}

.post-date {
  font-size: 16px;
  font-weight: 400;
  opacity: 0.4;
}

.post-content {
  font-size: 18px;
  font-family: "nunito";
  color: #2d334a;
  p {
    margin: 28px 0;
    word-spacing: 2px;
    text-align: justify;
    line-height: 1.7em;
  }
  blockquote {
    border-left: 4px solid #ffd803;
    padding-left: 20px;
    margin: 0px 20px;
    font-style: italic;
    color: #2d334a;
    font-weight: 500;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5em;
    margin-bottom: 20px;
    letter-spacing: -0.5px;
  }
  @media (max-width: 450px) {
    p {
      font-size: 14px;
    }
  }
}

.share-container {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

hr {
  border-color: rgba(39, 35, 67, 0.1);
  margin: 3em 0;
}

.share-button {
  text-align: center;
  background: white;
  border: 1px solid #f1faf9;
  color: #272343;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  i {
    margin-right: 10px;
    font-size: 24px;
  }
  &:hover {
    box-shadow: 0px 6px 18px -2px rgba(39, 35, 67, 0.15);
    cursor: pointer;
  }
  &:focus {
    outline: 0;
    box-shadow: 0px 6px 18px -2px rgba(39, 35, 67, 0.15);
  }
}
</style>