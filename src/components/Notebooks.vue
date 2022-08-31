<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#" class="btn" @click.prevent="onCreate"><i class="iconfont icon-plus"/>新建笔记本</a>
    </header>
    <main>
      <div class="layout">
        <h3>笔记本列表({{notebooks.length}}})</h3>
        <div class="book-list">
          <router-link v-for="notebook in notebooks" to="/note/1" class="notebook">
            <div>
              <span class="iconfont icon-notebook"></span> {{notebook.title}}
              <span>{{notebook.noteCounts}}</span>
              <span class="action" @click.stop.prevent="onEdit">编辑</span>
              <span class="action" @click.stop.prevent="onDelete">删除</span>
              <span class="data">3天前</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'
  import Notebooks from '@/apis/notebooks'

  export default {
    data() {
      return {
        notebooks: [],
      }
    },

    created() {
      Auth.getInfo()
        .then(res => {
          if (!res.isLogin) {
            this.$router.push('/login')
          }
        })
      Notebooks.getAll()
        .then(res=>{
          this.notebooks = res.data
        })
    },

    methods:{
      onCreate(){
        console.log(1)
      },

      onEdit(){
        console.log(2)
      },

      onDelete(){
        console.log(3)
      },
    }
  }
</script>

<style lang="less" scoped>
  @import url(../assets/css/notebook.less);
</style>
