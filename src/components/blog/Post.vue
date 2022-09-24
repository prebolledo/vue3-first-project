<script lang="ts" setup>import type { Post } from './common';

type Props = {
  post: Post,
};

const { post }: Props = defineProps<Props>();

</script>

<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{post.id}}: {{post.title}}</h5>
      <p class="card-text">>{{post.body}}</p>
    </div>
  </div>
</template>

<style>

</style>
