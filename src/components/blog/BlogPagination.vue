<script lang="ts" setup>
import { onMounted } from 'vue';
import { usePagination } from './composables/pagination';

type Props = {
  maxPerPage: number,
};

const { maxPerPage }: Props = defineProps<Props>();

const pagination = usePagination();
pagination.init(maxPerPage);
</script>

<template>
  <nav aria-label="Page navigation example">
    <h2>Page {{pagination.page}} of {{pagination.maxPage}}</h2>
    <ul class="pagination">
      <li class="page-item" @click="pagination.move(-1)">
        <button class="page-link" href="#" :disabled="pagination.isFirstPage()">Previous</button>
      </li>
      <li class="page-item" @click="pagination.move(1)">
        <button class="page-link" href="#" :disabled="pagination.isLastPage()">Next</button>
      </li>
    </ul>
  </nav>
</template>

<style>

</style>
