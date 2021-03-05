<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">这是一个博客</h1>
        <h2 class="hero-subtitle">实现首页列表和详情页</h2></div>
      <div class="projects">
        <div  class="project" v-for="item in stars" :key='item.id'>
          <a  :href="`/star/${item.node.id}`" class="project-link">
            <!-- <img
              class="thumbnail"
              alt="Banana"
              :src="`http://47.96.94.154:8222${item.node.pic.url}`"
              width="2560"
              sizes="(max-width: 2560px) 100vw, 2560px"
            /> -->
            <div class="thumbnail" :style="{backgroundImage: `url(http://47.96.94.154:8222${item.node.pic.url})`}"/>
            <h3  class="project-title">{{item.node.name}}</h3>
            <div  class="categories">
              <span  class="category"  v-for="itm in item.node.tags" :key="itm.name">{{itm.name}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query{
  allStrapiStar{
   edges{
    node{ 
      id,
      name,
      tags{name},
      pic{url}
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  computed:{
    stars(){
      return this.$page.allStrapiStar.edges
    }
  }
};
</script>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem;
}
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem;
}
.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    opacity: .6;
}
.projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
}
.project {
    grid-column: auto/span 2;
    text-align: center;
}
.project-link{
    text-decoration: none;
}
.thumbnail {
    height: 560px;
    -o-object-fit: cover;
    object-fit: cover;
    transition: all .15s ease;
    box-shadow: 0 0 40px -20px rgb(0 0 0 / 25%);
    max-width: 100%;
    background-size: cover;
    background-repeat:no-repeat;
}
.project-title {
    font-size: 1rem;
    color: #2b2b2b;
    margin: 2rem 0 1rem;
}
.categories{
    font-size: .8rem;
    color: #2b2b2b;
}
.category{
    margin-right: .8rem;
}
</style>
