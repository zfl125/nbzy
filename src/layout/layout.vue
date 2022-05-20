 <template>
  <div>
    <div class="bgmp4">
    </div>
    <div class="layout">
      <div class="goBack">
      </div>
      <ul class="header_nav">
        <li class="center_li">
          <router-link to="/"
            >{{ titleLeft
            }}<span style="padding-left: 20px">{{
              titleright
            }}</span></router-link
          >
        </li>
        <div id="nowDate" class="ab_box">
          <!-- 日期时间 -->
        </div>
      </ul>
      <div class="container">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleLeft: "数字赋能党建新引擎",
      titleright: "打造基层党建新阵地",
      leftNav: [],
      rightNav: [],
    };
  },

  mounted() {
    function setTime(e) {
      if (String(e).length < 2) {
        return "0" + e;
      } else {
        return e;
      }
    }
    setInterval(() => {
      var date = new Date();
      this.$nextTick(() => {
        var dom = document.getElementById("nowDate");
        if(dom){

        dom.innerHTML =
          date.getFullYear() +
          "-" +
          setTime(date.getMonth() + 1) +
          "-" +
          setTime(date.getDate()) +
          `&ensp;` +
          setTime(date.getHours()) +
          ":" +
          setTime(date.getMinutes()) +
          ":" +
      
          setTime(date.getSeconds());  }
      });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.bgmp4 {
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -1;
  background-image: url(~@/assets/date_bg.jpg);
  background-size: cover;
}
</style>