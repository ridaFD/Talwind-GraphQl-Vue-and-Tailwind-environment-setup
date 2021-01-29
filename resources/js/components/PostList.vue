<template>
  <div>
    <h1>PostsList</h1>
    <div v-if="$apollo.loading"></div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        {{ post.id }} is titled: {{ post.title }}
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: "PostList",
  apollo: {
    posts: gql `query
    {
      posts {
        id
        title
        body
      }
    }`
  }
}
</script>

<style scoped>

</style>