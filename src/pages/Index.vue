<template>
  <div>
    <header class="header">
      <div class="container header__inner">
        <h1 class="app-header" v-html="$page.metaData.siteName" />
        <!-- <h2 v-html="$page.metaData.siteDescription" /> -->
        <div class="contact">
          <a target="_blank" href="https://www.instagram.com/jeet.kacha/" class="contact__link">
            <i class="lab la-instagram"></i>
          </a>
          <a target="_blank" href="tel:9033123666" class="contact__link">
            <i class="lab la-whatsapp"></i>
          </a>
        </div>
      </div>
    </header>
    <Layout>
      <section class="post-list">
        <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
      </section>
    </Layout>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "Blogs"
  }
};
</script>

<page-query>
query {
  metaData {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        author
        title
        tags
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<style lang="scss" >
.post-list {
  display: flex;
}
.header {
  font-family: "satisfy";
  color: #272342;
  letter-spacing: -0.5px;
  text-align: left;
  padding: 40px 0px;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 450px) {
    padding: 20px 0;
  }
}

header h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 40px;
  @media (max-width: 450px) {
    margin-top: 10px;
    font-size: 48px;
  }
}

.contact {
  i {
    opacity: 0.5;
    color: #272343;
    font-size: 28px;
    transition: all 0.2s ease;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 450px) {
    margin-top: 15px;
  }
}
</style>
