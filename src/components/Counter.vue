<script lang="ts" setup>
import {ref, type Ref, computed} from 'vue';

type Props = {
  init?: number,
};

type Emits = {
  setCurrentNumber: (num: number) => void,
}

const props: Props = defineProps<Props>();
defineEmits<Emits>();

const counter: Ref<number> = ref<number>(parseInt(`${props.init ?? 0}`));

const favoriteNumbers: Ref<number[]> = ref<number[]>([]);

const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => {
  counter.value = 0;
  favoriteNumbers.value = [];
}
const addFavorite = () => {
  console.log(favoriteNumbers.value);
  if (!favoriteNumbers.value.includes(counter.value)) {
  favoriteNumbers.value.push(counter.value);
  }
}
const isIncluded = computed(() => favoriteNumbers.value.includes(counter.value))

const classCounter = computed(() => {
  if (counter.value == 0) {
    return 'zero';
  }
  if (counter.value > 0) {
    return 'positive';
  }
  if (counter.value < 0) {
    return 'negative';
  }
});
</script>

<template>
  <div class="container">
    Counter: <span :class="classCounter">{{counter}}</span>
    <br />
    <div class="btn-group mt-2">
      <button @click="increment" class="btn btn-success">Incrementar</button>
      <button @click="decrement" class="btn btn-danger">Disminuir</button>
      <button @click="addFavorite" class="btn btn-warning" :disabled="isIncluded">Add to Favorites</button>
      <button @click="reset"  class="btn btn-primary">Reset</button>
      <button @click="$emit('setCurrentNumber', counter)"  class="btn btn-outline-primary">Send Current Number</button>
    </div>
    <div class=" mt-2">
        <h2>Favorite Numbers</h2>
        <ul>
          <template
            v-for="(num, index) in favoriteNumbers"
            :key="`num-${num}`"
          >
            <li> {{num}}</li>
          </template>
        </ul>
      </div>
  </div>
</template>

<style>
  .positive {
    color: green;
  }

  .negative {
    color: red;
  }

  .zero {
    color: #333;
  }
</style>
