<template>
  <div>
    <router-link :to="{name: 'Post', params: {id: post.id}}">
      <h4 class="text-2xl pb-3 font-semibold hover:underline">{{ post.title }}</h4>
    </router-link>
    <p class="text-gray-600 pb-3">{{ post.body }}</p>
    <div class="text-gray-500">Created at: {{ post.created_at | timeago }}</div>
    <div>
      by hasan
    </div>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: Object
  }
}
</script>

<style scoped>

</style>