<template>
  <div class="post-list">
    <g-link class="post" :to="post.path" v-fp>
      <div class="post__image">
        <img src="../../content/images/blog.jpg" alt />
        <div class="post__tags">
          <span class="post__tag" v-for="tag in post.tags" :key="tag.id">{{ tag }}</span>
        </div>
      </div>
      <h3 class="post__title" v-html="post.title" />
      <div class="post__data">
        <p class="post__date" v-html="post.date" />
        <p class="post__readtime">{{ post.timeToRead }} mins read</p>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Baloo+2:400,500,600,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Nunito:400,600,700,800,900&display=swap");

// variables
$radius: 10px;

.post-list {
  display: flex;
}

.post {
  font-family: "nunito";
  display: block;
  border-radius: $radius;
  text-decoration: none;
  padding: 15px;
  transition: all 0.5s ease-in-out;
  background: white;
  box-shadow: none;
  outline: 0;
  max-width: 300px;
  overflow: hidden;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:focus {
    box-shadow: none;
    outline: 0;
  }

  &:hover &__image:before {
    opacity: 0;
  }
  &:hover &__tag {
    background: white;
    color: #272343;
  }
  &__image {
    max-height: 200px;
    overflow: hidden;
    border-radius: $radius;
    position: relative;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);

    img {
      width: 100%;
      object-fit: cover;
      overflow: hidden;
      border-radius: $radius;
      transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: $radius;
      // z-index: -1;
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
  &__title {
    // font-family: "karla";
    // letter-spacing: -0.5px;

    color: #272343cc;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 0px;
    margin-top: 12px;
    line-height: 1.5em;
  }
  &__description {
    color: #2d334a;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    display: block;
    line-height: 1.6em;
  }
  &__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  }
  &__date,
  &__readtime {
    font-size: 13px;
    color: #2d334a;
    opacity: 0.5;
    margin-bottom: 0px;
  }
  &__tags {
    display: flex;
    margin: 10px 0px;
    position: absolute;
    bottom: 0px;
    left: 10px;
  }
  &__tag {
    @extend .post__date;
    background: rgba(255, 255, 255, 0.3);
    color: white;
    display: inline;
    opacity: 1;
    padding: 4px 10px;
    margin-right: 8px;
    border-radius: $radius;
    font-size: 12px;
    font-weight: 600;
    opacity: 0.8;
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  }
  &__button {
    display: inline-block;
    background: #ffd803;
    color: #272343;
    text-decoration: none;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 450px) {
    &__title {
      font-size: 22px;
    }
    &__description {
      font-size: 14px;
      padding: 5px 0;
    }
  }
}
</style>
