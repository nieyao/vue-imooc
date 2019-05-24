<template>
  <el-card style="width: 300px; margin-left: 30px; float: left;">
      <div class="courseItem" @click="courseDetail">
        <div class="img">
          <img style="width: 100%;" :src="linkPrefix + '/course/' + course.img" alt="">
        </div>
        <div class="content">
          <h3 v-html="course.value" class="title">React知识点综合运用实例</h3>
          <div class="info">
            <div class="rank-count">
              <span class="rank">初级</span>
              <span class="count">348</span>
            </div>
            <p v-html="course.intro" class="desc">react综合案例操作，技能掌握更纯熟</p>
          </div>
        </div>
      </div>
  </el-card>

</template>
<script>
export default {
  props: {
    course: {
      Type: Object,
      default: {}
    }
  },
  methods: {
    courseDetail() {
      this.$router.push({
        path: "/course/" + this.course.cid
      })
    }
  }
}
</script>
<style lang="stylus">
  .courseItem
    width 258px
    display inline-block
    .img
      img
        border-radius 8px
    .content
      padding 12px 8px
      .title
        overflow hidden;
        white-space nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        color: #07111B;
        line-height: 24px;
      .info
        .rank-count
          font-size: 12px;
          color: #93999F;
          line-height: 24px;
          font-weight: 400;
        .desc
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          height: 48px;
          overflow: hidden;
          font-size: 12px;
          font-weight: 300;
          color: #93999F;
          line-height: 16px;
          margin-top: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
</style>
