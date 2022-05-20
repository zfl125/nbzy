<template>
  <div class="home">
    <div>
      <EchartsBlock style-type="1" title="党组织类型情况">
        <ul class="partyType">
          <li class="count" v-for="item in partyType" :key="item.name">
            <div class="bgImg"></div>
            <p>{{ item.value || 0 }}</p>
            <p class="typeName">{{ item.name }}</p>
          </li>
        </ul>
      </EchartsBlock>
      <EchartsBlock style-type="1" title="党员发展阶段">
        <XBar :data-source="PartyDevelop" />
      </EchartsBlock>
      <EchartsBlock style-type="1" title="党龄分析、年龄分布">
        <div class="Ages">
          <div class="pie_item">
            <Xpie :data-source="PartyAge" />
            <p>党龄分析</p>
          </div>
          <div class="pie_item">
            <Xpie :data-source="Age" />
            <p>年龄分布</p>
          </div>
        </div>
      </EchartsBlock>
      <EchartsBlock style-type="1" title="职称分析、师生党员数">
        <div class="analysis">
          <div class="pie_item">
            <Pie :data-source="communist" />
            <p>职称分析</p>
          </div>
          <div class="pie_item">
            <Pie :data-source="teacherstudent" />
            <p>师生党员数</p>
          </div>
        </div>
      </EchartsBlock>
    </div>
    <div class="center">
      <div class="centerImg">
        <ul class="centerImg_title">
          <li class="center_h">
            <h3>在册党员数</h3>
            <p>{{ center.communist_num || 0 }}</p>
          </li>
          <li class="center_h">
            <h3>教工党员数</h3>
            <p>{{ center.teacher_num || 0 }}</p>
          </li>
          <li class="center_h">
            <h3>学生党员数</h3>
            <p>{{ center.student_num || 0 }}</p>
          </li>
          <li class="center_h">
            <h3>党建品牌</h3>
            <p>{{ center.brand_num || 0 }}</p>
          </li>
          <li class="center_h">
            <h3>党建联盟</h3>
            <p>{{ center.union_num || 0 }}</p>
          </li>
          <li class="center_h">
            <h3>党建双创</h3>
            <p>{{ center.doublecreate_num || 0 }}</p>
          </li>
        </ul>
        <div class="centerBg">
          <!-- <img src="~@/assets/001.png" alt="" />
          <img src="~@/assets/002.png" alt="" />
          <img src="~@/assets/003.png" alt="" />
          <img src="~@/assets/004.png" alt="" /> -->
          <img :src="danghui" alt />
        </div>
      </div>
      <EchartsBlock style-type="2" title="主题党日活动情况">
        <ul v-if="eventsList.length > 0" class="events scroll" v-scrolls>
          <li v-for="item in eventsList" :key="item.event_id">
            <div class="list">
              <span class="status">{{ item.party_no }}：</span>
              <span class="text"
                >{{ item.meeting_name }}{{ item.meeting_name
                }}{{ item.meeting_name }}{{ item.meeting_name }}</span
              >
              <span class="text_right">{{
                $setTimes(item.meeting_start_time)
              }}</span>
            </div>
          </li>
        </ul>
      </EchartsBlock>
    </div>
    <div>
      <EchartsBlock style-type="1" title="预警监督">
        <div class="supervise">
          <div class="supervise_item">
            <Xpie2
              style="width: 90%; height: 100%"
              :name="16"
              count="1"
              :data-source="earlywarning.earlywarning"
            />
            <div class="supervise_title">预警信息条数</div>
          </div>
          <div class="supervise_item">
            <Xpie2
              style="width: 90%; height: 100%"
              :name="9"
              count="2"
              :data-source="earlywarning.overtime"
            />
            <div class="supervise_title">超期信息条数</div>
          </div>
        </div>
      </EchartsBlock>
      <EchartsBlock style-type="1" title="工作情况">
        <Double :data-source="workplan" />
      </EchartsBlock>
      <EchartsBlock style-type="1" title="组织生活开展情况">
        <Bar :data-source="orglife" />
      </EchartsBlock>
      <EchartsBlock style-type="1" title="党费分析">
        <div class="partyPay">
          <div class="partyPay_item">
            <Polar
              style="width: 90%; height: 90%"
              name="收入"
              :data-source="income"
            />
            <div class="item_title">
              <p>
                本年：<span
                  style="fontweight: bold"
                  v-if="income.value && income.value.length > 1"
                  >{{ income.value[1] }}元</span
                >
              </p>
              <p>
                上年：<span
                  style="fontweight: bold; color: rgba(6, 237, 154, 1)"
                  v-if="income.value"
                  >{{ income.value[0] }}元</span
                >
              </p>
              <p class="title">收入</p>
            </div>
          </div>
          <div class="partyPay_item">
            <Polar
              style="width: 90%; height: 90%"
              name="支出"
              :data-source="expenditure"
            />
            <div class="item_title">
              <p>
                本年：<span
                  style="fontweight: bold"
                  v-if="expenditure.value && expenditure.value.length > 1"
                  >{{ expenditure.value[1] }}元</span
                >
              </p>
              <p>
                上年：<span
                  style="fontweight: bold; color: rgba(6, 237, 154, 1)"
                  v-if="expenditure.value"
                  >{{ expenditure.value[0] }}元</span
                >
              </p>
              <p class="title">支出</p>
            </div>
          </div>
        </div>
      </EchartsBlock>
    </div>
  </div>
</template>
<script>
import danghui from "@/assets/pic2.png";
import EchartsBlock from "@/components/EchartsBlock";
import Bar from "@/components/echarts/bar";
import XBar from "@/components/echarts/Xbar";
import Xpie from "@/components/echarts/Xpie";
import Xpie2 from "@/components/echarts/Xpie2";
import Pie from "@/components/echarts/Pie";
import Polar from "@/components/echarts/Polar";
import Double from "@/components/echarts/Double";
import { functionAuth } from "@/servers/home.js";

const { HOME } = DATA_TMP;

export default {
  data() {
    return {
      dataTmp: HOME,
      ...HOME,
      danghui,
      eventsList: [],
      partyType: [],
      center: [],
      PartyDevelop: {},
      PartyAge: {},
      Age: {},
      communist: {},
      teacherstudent: {},
      earlywarning: {},
      income: {},
      expenditure: {},
      orglife: {},
      workplan: {},
    };
  },
  components: {
    EchartsBlock,
    Bar,
    XBar,
    Xpie,
    Xpie2,
    Pie,
    Polar,
    Double,
  },
  methods: {
    getEcharts() {
      functionAuth().then((res) => {
        this.income = res.dues.income;
        this.expenditure = res.dues.expenditure;
        this.center = res.middle;
        this.partyType = res.party_level;
        this.PartyDevelop = res.communist_status;
        this.Age = res.age;
        this.PartyAge = res.ccp_age;
        this.communist = res.communist_level;
        this.teacherstudent = res.teacher_student_num;
        this.earlywarning = res.earlywarning_overtime;
        this.eventsList = res.middle.theme_partyday;
        this.orglife = res.orglife;
        this.workplan = res.workplan;
      });
    },
  },
  created() {
    this.getEcharts();
  },
};
</script>
<style lang="scss" src="./style.scss" scoped>
</style>