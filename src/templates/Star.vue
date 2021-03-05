<template>
  <Layout>
    <div  class="project">
      <div  class="container">
        <div  class="project-header">
          <h1  class="project-title">{{$page.star.name}}</h1>
          <div  class="project-info">
            <div  class="categories-container">
              <div  class="categories">
                <span  class="label">标签</span>
                <span  class="category" v-for="item in $page.star.tags" :key="item.name">{{item.name}}</span>
              </div>
            </div>
            <div  class="year-container">
              <span  class="label">年龄</span>
              <div >{{$page.star.age}}</div>
            </div>
          </div>
        </div>
        <div  class="content">
          <p>
            {{$page.star.introduce}}
          </p>
          <p>
            <img
              class="thumbnail"
              alt="Banana"
              :src="`http://47.96.94.154:8222${$page.star.pic.url}`"
              width="2560"
              sizes="(max-width: 2560px) 100vw, 2560px"
            />
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id: ID!) {
 star:strapiStar(id:$id){
  	id,name,tags{name},age,pic{url},introduce
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
.project-header {
    padding: 20vh 0 4rem;
}
.project-title {
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
}
.project-info {
    display: flex;
    flex-wrap: wrap;
    font-size: .8rem;
}
.project-info>div {
    margin-right: 4rem;
}
.project-info>div:last-of-type {
    margin: 0;
}

.project-info>div {
    margin-right: 4rem;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
 p{
    line-height: 1.5;
    font-size: 14px;
    color:#666;
}
img {
    max-width: 100%;
}
.category {
  margin-right: 10px;
}
</style>
