<script lang="ts" setup>
import type { Post } from "./common";
import BlogPost from "./BlogPost.vue";

type Props = {
  posts: Post[],
};

const { posts }: Props = defineProps<Props>();
</script>

<template>
  <ul>
    <li class="list-group-item" v-for="(post, index) in posts" :key="post.id" >
      <BlogPost
        :post="post"
      />
    </li>
  </ul>
</template>

<style>

</style>
