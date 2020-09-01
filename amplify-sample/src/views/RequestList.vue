<template>
  <div class="c-request-list-container">
    <div v-if="!isMobile">
      <search-panel />
      <request-control-panel
        @getRequstListByPanel="getRequestTypeByPanel($event)"
      >
        <request-num
          class="c-request-num"
          :request_total="request_total"
          :request_rage="request_rage"
        />
      </request-control-panel>
    </div>

    <div v-if="isMobile">
      <request-control-panel />
      <search-panel />
      <request-num
        class="c-request-num"
        :request_total="request_total"
        :request_rage="request_rage"
      />
    </div>

    <!--選択された値によって依頼内容を制御する-->
    <request-content :requestType="requestType" />

    <pagination-num
      class="c-pagination-num"
      :page_total="page_total"
      :page_current="page_current"
    />
  </div>
</template>

<script>
import Vue from "vue";
import SearchPanel from "../components/molecules/SearchPanel.vue";
import RequestControlPanel from "../components/molecules/RequestControlPanel.vue";
import PaginationNum from "../components/atoms/PaginationNum.vue";
import RequestNum from "../components/atoms/RequestNum.vue";
import RequestContent from "../components/organisms/RequestContent";
import {
  ListSortedByStatusQuery,
  ListRequesBidsQuery,
} from "../../src/graphql/requestquery";

export default Vue.extend({
  name: "RequestList",
  data() {
    return {
      isMobile: this.$vuetify.breakpoint.xs,
      logoutUrl: process.env.VUE_APP_LOGOUT_URL || "",
      requestType: "すべて",
    };
  },
  computed: {
    // TODO スキーマに合わせる修正
    request_total() {
      return 5;
    },
    request_rage() {
      return "1-5";
    },
    page_total() {
      return 1;
    },
    page_current() {
      return 1;
    },
  },
  components: {
    SearchPanel,
    RequestControlPanel,
    PaginationNum,
    RequestNum,
    RequestContent,
  },

  methods: {
    handleOnClick(offer_id) {
      this.$emit("handleOnClick");
    },
    getRequestTypeByPanel(event) {
      this.requestType = event;
      return this.requestType;
    },
  },
});
</script>
<style lang="scss"></style>
