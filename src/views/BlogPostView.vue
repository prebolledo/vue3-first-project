<script lang="ts" setup>
import type { Post } from "@/components/blog/common";
import { useRoute } from "vue-router";
import BlogPost from "../components/blog/BlogPost.vue";

const route = useRoute();

const post: Post = {
  id: route.params.id[0],
  title: 'test',
  body: 'test',
}
</script>

  <template>
    <BlogPost :post="post"/>
  </template>
