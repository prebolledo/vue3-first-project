<script lang="ts" setup>
type Props = {
  page: number,
  maxPage: number
};

interface Emits {
  (e: 'movePage', num: number): void
};

const { page }: Props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <nav aria-label="Page navigation example">
    <h2>Page {{page}} of {{maxPage}}</h2>
    <ul class="pagination">
      <li class="page-item" @click="emit('movePage', -1)"><button class="page-link" href="#" :disabled="page === 1">Previous</button></li>
      <li class="page-item" @click="emit('movePage', 1)"><button class="page-link" href="#" :disabled="page === maxPage">Next</button></li>
    </ul>
  </nav>
</template>

<style>

</style>
