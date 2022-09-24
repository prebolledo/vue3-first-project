<script lang="ts" setup>
import Pagination from "./Pagination.vue";
import List from "./List.vue";
import {
  movePage,
  page,
  posts,
  from,
  to,
  loadPosts,
  maxPage,
} from './blog-helpers';

loadPosts();

</script>

<template>
  <section class="container-fluid mt-4">
    <Pagination @movePage='movePage' :page='page' :maxPage="maxPage" />
    <List :posts='posts.slice(from, to)' />
  </section>
</template>
