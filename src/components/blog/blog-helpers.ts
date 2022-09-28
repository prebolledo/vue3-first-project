import {ref, type Ref} from 'vue';
import type { Post } from './common';

export const MAX_POST_PAGE: number = 8;
export const posts: Ref<Post[]> = ref<Post[]>([]);
export const from: Ref<number>  = ref<number>(0);
export const to: Ref<number>  = ref<number>(MAX_POST_PAGE);
export const page: Ref<number>  = ref<number>(1);
export const maxPage: Ref<number>  = ref<number>(1);
export const loading: Ref<boolean>  = ref<boolean>(false);

export const movePage = (num: number): void => {
  let _from: number = from.value + MAX_POST_PAGE * num;
  let _to: number = to.value + MAX_POST_PAGE * num;
  let _page: number = Math.round(_to / MAX_POST_PAGE);

  _page = _page < 0 ? 1 : _page;
  _page = _page > maxPage.value
    ? maxPage.value
    : _page;

  if (
    _page < 0
    || _page > maxPage.value
  ) {
    return;
  }

  page.value = _page;
  from.value = _from;
  to.value = _to;
};

export const loadPosts = async () => {
  loading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await response.json();
    if (posts.value.length > 0) {
      page.value = 1;
      maxPage.value = Math.round(posts.value.length / MAX_POST_PAGE);
    }
  } catch(error) {
    console.log({
      at: 'loadPosts',
      error,
    });
  } finally {
    loading.value = false;
  }
};
