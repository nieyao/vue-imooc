<template>
  <div style="background:#F3F5F7;">
    <center class="courseContent">
    <course-item v-for="(item,index) in courses" :course="item" :key="index"></course-item>

  </center>
  <center>
      <el-pagination
        style="margin-top: 20px; margin-bottom: 20px;"
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="size">
      </el-pagination>
  </center>
  </div>
</template>
<script>
import CourseItem from '@/base/course-item/course-item'
export default {
  components: {
    CourseItem
  },
  methods: {
    handleCurrentChange(page) {
      this.page = page
      this.getCourse()

    },
    getCourse() {
      this.axios.get(this.linkPrefix + "/course/search/" + this.keyword  + "/" + this.page).then(res => {
        this.courses = res.data.content;
        this.size = res.data.size
        console.log(this.courses)
      });
    }
  },
  watch: {
    keyword(val,oldVal) {
      console.log("关键词", val);
      this.axios.get(this.linkPrefix + "/course/search/" + this.keyword + "/" + this.page).then(res => {
        this.courses = res.data.content;
        this.size = res.data.size
        console.log(this.courses)
      });
    },
    tag(val,oldVal) {
      if(val === "") return;
      else {
        this.axios.get(this.linkPrefix + "/course/search/" + val + "?type=1").then(res => {
          this.courses = res.data.content;
          console.log(this.courses)
        });
      }
    }
  },
  props: {
    keyword: {
      Type: String,
      default: ""
    },
    tag: {
      Type: String,
      default: ""
    }
  },
  data() {
    return {
      courses: [],
      page: 1,
      size: 10
    }
  },
  created() {
    console.log("course-content   created")
    this.getCourse()
  }
  
}
</script>
<style lang="stylus">
  .courseContent
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width 100%
</style>
