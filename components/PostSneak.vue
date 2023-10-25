<template>
     <a :href="`/${post.Slug}`" class="post-sneak">
          <div class="main-info">
               <h3>{{ post.Title }}</h3>
               <p>{{ post.Category }}</p>
               <p>{{ post.Intro }}</p>
               <p><i class="fa-solid fa-calendar-days"></i> {{ published }}</p>
          </div>
          <img :src="post.CoverURL" alt="cover">
     </a>
</template>

<script lang="ts" setup>
     const props = defineProps<{
          post: Post;
     }>();

     const published = new Date(props.post.publishedAt).toLocaleDateString(
          'de-DE'
     );
</script>

<style scoped lang="scss">
.post-sneak {
     margin-top: 25px;
     margin-left: 25px;
     margin-right: 25px;
     margin-bottom: 0;
     padding: 0;
     height: 200px;
     background-color: var(--body-darker);
     display: grid;
     grid-template-columns: 2;
     grid-template-rows: 1;
     grid-template-areas: "left right";
     border-radius: 25px;
     color: var(--text);
     text-decoration: none;
     justify-content: space-between;

     .main-info {
          
     }

     img {
          height: 200px;
          width: 200px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
     }
}
</style>

// Content