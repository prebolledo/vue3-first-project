<script lang="ts" setup>
import {ref, type Ref, computed} from 'vue';
import Blog from './components/blog/Blog.vue';

/*
const currentNumber: Ref<number> = ref<number>(0)
const setCurrentNumber = (num: number) => {
  currentNumber.value = num;
};
//<Counter :init="10" @setCurrentNumber="setCurrentNumber" />
*/

</script>

<template>
  <div class="container-fluid">
    <Blog />
  </div>
</template>

<style>

</style>
