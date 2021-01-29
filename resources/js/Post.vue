<template>
  <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mt-20">
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <div class="text-lg text-gray-600">By {{ user.name }} in Links 3 hours ago</div>
      <div v-for="post in user.posts" :key="user.posts.id">
        <h1 class="text-5xl mt-10 font-bold mb-12">{{ post.title }}</h1>
        <p class="text-gray-700 pb-3 pb-12 whitespace-pre-line">{{ post.body }}</p>
      </div>
      <div class="mb-24 flex">
        <div class="mr-6">
          <img
              :src="'/storage/faces/' + user.avatar" alt="Author avatar" class="w-16 h-16 rounded-full">
        </div>
        <div class="flex flex-col justify-center">
          <div class="text-lg text-gray-600">Written by {{ user.name }}</div>
          <div class="text-gray-600">Published in Links on August 19, 2020</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: "Post",
  apollo: {
    user: {
      query: gql`
        query ($id: ID!) {
          user(id: $id) {
              id
              name
              avatar
              posts {
                title
                body
              }
          }
        }`,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style scoped>

</style>