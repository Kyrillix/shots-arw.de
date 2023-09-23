<template>
     <a :href="`/${post.Slug}`" class="post-sneak">
          <h3>{{ post.Title }}</h3>
          <p>{{ post.Category }}</p>
          <p>{{ post.Intro }}</p>
     </a>
</template>

<script lang="ts" setup>
     defineProps<{
          post: Post;
     }>();
</script>

<style scoped lang="scss"></style>