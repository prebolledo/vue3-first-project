<script lang="ts" setup>
import type { Post } from '@/components/blog/composables/posts';
import { useFavoritesStore } from '@/store/favorites';

type Props = {
  post: Post,
};

const { post }: Props = defineProps<Props>();
const useFavorites = useFavoritesStore();

</script>

<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{post.id}}: {{post.title}}</h5>
      <p class="card-text">>{{post.body}}</p>
      <router-link :to="`/blog/post/${post.id}`">Detail</router-link>
      <div>
        <button :disabled="useFavorites.exists(post.id)" class="btn btn-primary" @click="useFavorites.add(post.id)">Add Fav</button>
        <span v-if="useFavorites.exists(post.id)">is fav</span>
      </div>
    </div>
  </div>
</template>

<style>

</style>
