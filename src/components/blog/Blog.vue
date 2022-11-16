<script lang="ts" setup>
import { useLoadPosts } from '@/components/blog/composables/posts';
import BlogPagination from './BlogPagination.vue';
import BlogList from './BlogList.vue';
import { usePagination } from './composables/pagination';

const loadPost = useLoadPosts();
const pagination = usePagination();
const { from, to, setZise} = pagination;
const { posts, loading } = loadPost
loadPost.load('https://jsonplaceholder.typicode.com/posts').then(() => {
  setZise(loadPost.posts.value.length);
});

</script>

<template>
  <section class="container-fluid mt-4">
    <BlogPagination :maxPerPage='8'/>
    <div v-if="loading">
      Cargando...
    </div>
    <BlogList v-if="!loading"
      :posts='posts.slice(
        from,
        to
      )'
    />
  </section>
</template>
