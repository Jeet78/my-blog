<template>
  <Layout>
    <header class="header">
      <h1 class="app-header" v-html="$page.metadata.siteName" />
      <!-- <h2 v-html="$page.metaData.siteDescription" /> -->
      <div class="contact">
        <a
          target="_blank"
          href="https://www.instagram.com/jeet.kacha/"
          class="contact__link"
          ><i class="lab la-instagram"></i
        ></a>
        <a target="_blank" href="tel:9033123666" class="contact__link"
          ><i class="lab la-whatsapp"></i
        ></a>
      </div>
    </header>
    <section class="posts">
      <PostList
        v-for="edge in $page.allPost.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: "Blogs",
  },
};
</script>

<page-query>
query {
  metadata {
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

<style lang="scss">
.header {
  font-family: "lobster two";
  color: #272342;
  font-size: 30px;
  text-align: left;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // line-height: 20px;
  @media (max-width: 450px) {
    padding: 20px 0;
  }
}

header h1 {
  margin-top: 0px;
  margin-bottom: 10px;
  @media (max-width: 450px) {
    margin-top: 10px;
    font-size: 48px;
  }
}

.contact {
  i {
    opacity: 0.5;
    color: #272343;
    transition: all 0.2s ease;
    margin-right: 8px;
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
