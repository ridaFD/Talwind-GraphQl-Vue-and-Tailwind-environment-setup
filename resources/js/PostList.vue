<template>
  <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-4/5 my-20">
    <h1 class="text-4xl">PostsList</h1>
    <div v-if="$apollo.loading"></div>
    <div v-else>
      <PostListItem v-for="post in posts" :key="post.id" :post="post" class="mt-10"></PostListItem>
    </div>
   </div>
</template>

<script>
import gql from 'graphql-tag';
import PostListItem from "./components/PostListItem";
export default {
  name: "PostList",
  components: {
    PostListItem
  },
  apollo: {
    posts: gql `query
    {
      posts {
        id
        user_id
        title
        body
        created_at
      }
    }`
  }
}
</script>

<style scoped>

</style>