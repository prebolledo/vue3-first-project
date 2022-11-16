import { defineStore } from 'pinia';
import { computed, ref, type Ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favsFromLS: string | null = localStorage.getItem('favorites') ?? null;
  const favorites: Ref<string[]> = ref(
    favsFromLS !== null ? JSON.parse(favsFromLS) : [],
  );
  const add = (fav: string) => {
    if(!exists(fav)){
      favorites.value.push(fav);
      localStorage.setItem('favorites', JSON.stringify(favorites.value));
    }
  };
  const exists = (fav: string) => {
    return favorites.value.includes(fav);
  }

  return {
    favorites,
    add,
    exists,
  };
});
