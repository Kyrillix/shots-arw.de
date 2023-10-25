<template>
     <header>
          <nav>
               <a class="logo" href="/">
                    <img src="../assets/img/S-Logo-outline.webp" alt="">
                    <p>hots.arw</p>
               </a>
               <ul>
                    <li><a href="#">Home</a></li>
                    <li>
                         <div class="services-dropdown">
                              <label for="services">Services:</label>
                              <select id="services" @change="navigateToPage">
                                   <option value="">Auswählen</option>
                                   <option value="test1">Test1</option>
                                   <option value="test2">Test2</option>
                                   <option value="test3">Test3</option>
                              </select>
                         </div>
                    </li>
                    <li>|</li>
                    <li>lang change</li>
                    <li>
                         <select v-model="$colorMode.preference">
                              <option value="system">System</option>
                              <option value="light">Light</option>
                              <option value="dark">Dark</option>
                         </select>
                    </li>
               </ul>
          </nav>
     </header>

     <main>
     </main>
</template>

<style lang="scss" scoped>
     header {
          background-color: var(--body-darker);
          color: var(--text);

          nav {
               display: flex;
               flex-direction: row;
               justify-content: space-between;

               .logo {
                    display: flex;
                    flex-direction: row;
                    color: var(--text);
                    text-decoration: none;

                    img {
                         height: 60px;
                    }
               }

               ul {
                    display: flex;
                    flex-direction: row;
                    list-style-type: none;

                    li {
                         margin-right: 25px;

                         a {
                              color: var(--text);
                              text-decoration: none;
                         }
                    }
               }
          }
     }
</style>

<script setup>
     const colorMode = useColorMode()

     console.log(colorMode.preference)
</script>