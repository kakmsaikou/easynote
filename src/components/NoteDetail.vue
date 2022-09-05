<template>
  <div class="detail" id="note">
    <NoteSideBar/>
    <div id="note-detail">
      <h1>notebookId : {{ $route.query.notebookId }}</h1>
      <h1>noteId : {{ $route.query.noteId }}</h1>
    </div>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'
  import NoteSideBar from './NoteSideBar'

  export default {
    data() {
      return {
        msg: '笔记本详情页'
      }
    },

    components:{
      NoteSideBar
    },

    created() {
      Auth.getInfo()
        .then(res => {
          if (!res.isLogin) {
            this.$router.push('/login')
          }
        })
    }
  }
</script>

<style scoped>
  @import url(../assets/css/note.less);

  #note {
    display: flex;
    align-items: stretch;
    background-color: #fff;
    flex: 1;
  }
</style>
