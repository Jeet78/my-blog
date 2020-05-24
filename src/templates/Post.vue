<template>
  <Layout class="layout--narrowed">
    <div class="post--single">
      <div class="flex-between">
        <g-link to="/" class="link">
          <i class="las la-arrow-left"></i> View all articles
        </g-link>
        <h2 style="margin-bottom:0px;" class="theme-toggle" @click="toggleTheme">
          <i :class="theme"></i>
        </h2>
      </div>

      <div class="post-title">
        <h1>{{ $page.post.title }}</h1>
        <p class="post-date">{{ $page.post.timeToRead }} min read</p>
      </div>
      <!-- <div class="post-image">
        <img src="../../content/images/blog.jpg" alt />
      </div>-->
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
  metaInfo() {
    return {
      title: this.title
    };
  },
  data() {
    return {
      title: "",
      theme: "las la-sun"
    };
  },

  created() {
    console.log(this.$page.post.title);
    this.title = this.$page.post.title;
  },
  computed: {
    link() {
      return window.location.origin + window.location.pathname;
    }
  },

  methods: {
    toggleTheme() {
      this.theme == "las la-sun"
        ? (this.theme = "las la-moon")
        : (this.theme = "las la-sun");

      document.querySelector("body").classList.toggle("dark");
    },
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
.layout--narrowed {
  max-width: 920px;
}

.post--single {
  margin-bottom: 50px;
}

.link {
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.5;
  margin-top: 30px;
  display: inline-block;
  // border-bottom: 1px solid transparent;
  i {
    padding-right: 6px;
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
  color: var(--text-color);
  h1 {
    font-family: var(--accent-font);
    letter-spacing: -1px;
    font-size: 34px;
    font-weight: 800;
    margin-bottom: 0px;
  }
  @media (max-width: 450px) {
    padding: 0.5em 0;
    h1 {
      font-size: var(--post-title-mobile);
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
  font-family: var(--accent-font);
  letter-spacing: -0.5px;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.8;
}

.post-content {
  font-size: var(--reading-font-size);
  font-family: var(--reading-font);
  color: var(--text-color);
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  p {
    margin: 28px 0;
    word-spacing: 2px;
    text-align: left;
    font-weight: 300;

    line-height: var(--reading-line-height);
  }
  blockquote {
    border-left: 4px solid #ffd803;
    background: var(--accent-color);
    padding: 20px 15px;

    margin: 0px 20px;
    font-style: italic;
    color: var(--text-color);
    font-weight: 500;
    p {
      margin: 0px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5em;
    margin-bottom: 20px;
  }
  @media (max-width: 450px) {
    p {
      font-size: var(--reading-font-size-mobile);
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

.theme-toggle {
  &:hover {
    cursor: pointer;
  }
}
</style>