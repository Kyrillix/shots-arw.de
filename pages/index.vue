<template>
     <div class="posts">
          <PostSneak
               v-for="post in posts"
               :post="post"
               :key="post.Title"
          />
     </div>
     
     
</template>

<script setup lang="ts">
     const { find } = useStrapi();
     const { data: posts } = await useAsyncData('posts', () => 
     find<StrapiResponse<StrapiBase<Post>[]>>('posts'), {
          transform: (data: any) => {
               if (data.data) {
                    return data.data.map((post: any) => post.attributes);
                    } else {
                         return null;
               }
          }
     });
</script>

<style scoped lang="scss">
.posts {
     background-color: var(--body);
}
</style>

