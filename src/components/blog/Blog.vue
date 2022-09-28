<script lang="ts" setup>
import {
  movePage,
  page,
  posts,
  from,
  to,
  loadPosts,
  maxPage,
  loading,
} from './blog-helpers';
import BlogPagination from './BlogPagination.vue';
import BlogList from './BlogList.vue';
import { onMounted } from 'vue';

/*onMounted(async () => {
  await loadPosts();
})*/

loadPosts();

</script>

<template>
  <section class="container-fluid mt-4">
    <BlogPagination @movePage='movePage' :page='page' :maxPage="maxPage" />
    <div v-if="loading">
      Cargando...
    </div>
    <BlogList v-if="!loading" :posts='posts.slice(from, to)' />
  </section>
</template>
