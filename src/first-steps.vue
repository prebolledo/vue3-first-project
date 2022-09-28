<script lang="ts" setup>
  import {ref, type Ref, computed} from 'vue';


/*
const currentNumber: Ref<number> = ref<number>(0)
const setCurrentNumber = (num: number) => {
  currentNumber.value = num;
};
//<Counter :init="10" @setCurrentNumber="setCurrentNumber" />
*/

  type Color = {
    name: string,
    enabled: boolean,
  };
  const name: string = 'Pablo';
  const style: string = 'color: green';
  const colors: Color[] = [
    { name: 'red', enabled: true, },
    { name: 'blue', enabled: true,  },
    { name: '#333', enabled: false,  },
  ];
  const enebled: boolean = false;

  const handleClick = (value: string): void => {
    console.log(`showing ${value}`);
  };

  const counter: Ref<number> = ref<number>(0);

  const favoriteNumbers: Ref<number[]> = ref<number[]>([]);

  const increment = () => counter.value++;
  const decrement = () => counter.value--;
  const reset = () => {
    counter.value = 0;
    favoriteNumbers.value = [];

  }
  const addFavorite = () => {
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
    <div>
      <h1>Hola {{name}}</h1>
    </div>
    <div>
      <h2 :style="style"> {{ colors[0].name }}</h2>
    </div>
    <div>
      <ul>
        <template
          v-for="(color, index) in colors"
          :key="`fruta-${index}`"
        >
          <li v-if="color.enabled" :style="`color: ${color.name}`"> {{color.name}}</li>
        </template>
      </ul>
    </div>
    <div>
      <p v-if="enebled">Enabled</p>
      <p v-if="!enebled">Disabled</p>
      <p v-show="enebled">Despliega el dom siempre</p>
    </div>
    <div>
      <button v-on:click="handleClick('text one')">Click one</button>
      <button v-on:click.right.prevent="handleClick('text right')">Click right</button>
      <button v-on:click.left.prevent="handleClick('text left')">Click left</button>
      <button v-on:click.middle.prevent="handleClick('text middle')">Click middle</button>
      <button @click="handleClick('text two')">Click two</button>
    </div>

    <div>
      Counter:
      <span v-if="counter > 0" style="color: green">{{counter}}</span>
      <span v-if="counter === 0" style="color: #333">{{counter}}</span>
      <span v-if="counter < 0" style="color: red">{{counter}}</span>
      <br/>
      Counter color with class:
      <span :class="classCounter">{{counter}}</span>
      <br/>
      <div class="input-group">
        <button @click="increment" class="btn btn-success">Incrementar</button>
        <button @click="decrement" class="btn btn-danger">Disminuir</button>
        <button @click="addFavorite" class="btn btn-warning" :disabled="isIncluded">Add to Favorites</button>
        <button @click="reset"  class="btn btn-primary">Reset</button>
      </div>
      <div>
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
