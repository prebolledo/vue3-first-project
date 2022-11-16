import { ref, type Ref } from "vue";

export type Post = {
  id: string,
  title: string,
  body: string,
}

const posts: Ref<Post[]> = ref<Post[]>([]);
const loading: Ref<boolean>  = ref<boolean>(false);
type LoadPosts = (url: string) => Promise<void>;

export const useLoadPosts = (): {
  load: LoadPosts,
  posts: Ref<Post[]>,
  loading: Ref<boolean>,
} => {
  const load = async (url: string) => {
    try {
      loading.value = true;
      const response = await fetch(url)
      posts.value = await response.json();
    }catch(error) {
      console.log({
        at: 'useLoadPosts',
        error,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    load,
    posts,
  }
}
