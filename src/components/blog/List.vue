<script lang="ts" setup>
import type { Post } from "./common";
import PostComponet from "./Post.vue";

type Props = {
  posts: Post[],
};

const { posts }: Props = defineProps<Props>();

</script>

<template>
  <ul>
    <li class="list-group-item" v-for="(post, index) in posts" :key="post.id" >
      <PostComponet
        :post="post"
      />
    </li>
  </ul>
</template>

<style>

</style>
