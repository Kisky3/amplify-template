<template>
  <amplify-connect :query="getRequestByQuery">
    <template slot-scope="{ loading, data, errors }">
      <div v-if="loading">Loading...</div>
      <div v-else-if="errors.length > 0">
        何らかの原因でデータの取得はできませんでした
      </div>
      <div v-else-if="data">
      {{ request.item_data.items}}
        <request
          v-for="request in data.listRequesBids.items"
          v-bind:key="request.recycle_request_id"
          :category="getCategory(request.item_data.items)"
        >
          <basic-btn
            v-if="!isMobile"
            class="c-detail-btn"
            @handleOnClick="handleOnClick(request.offer_id)"
          >
            詳細を見る {{ requestType }}
          </basic-btn>
        </request>
      </div>
    </template>
  </amplify-connect>
</template>
<script>
import Vue from "vue";
import Request from "../molecules/Request.vue";
import BasicBtn from "../atoms/BasicBtn.vue";
import {
  ListSortedByStatusQuery,
  ListRequesBidsQuery,
} from "../../../src/graphql/requestquery";
import test_category from "../../../src/assets/test_category.json";

export default Vue.extend({
  name: "RequestContent",
  props: {
    requestType: {
      type: String,
      default: "",
    },
  },
  components: {
    Request,
    BasicBtn,
  },
  computed: {
    currentDate: () => {
      const data = new Date();
      const year = data.getFullYear();
      const month = ("0" + (data.getMonth() + 1)).slice(-2);
      const day = data.getDate();
      const current_date = `${year}-${month}-${day}`;
      return current_date;
    },
    getRequestByQuery() {
      switch (this.requestType) {
        case "すべて":
          return this.$Amplify.graphqlOperation(ListSortedByStatusQuery, {
            bid_status: "ACTIVE",
            dead_line: { gt: this.currentDate },
          });
        case "入札あり":
          console.log(this.$Amplify.graphqlOperation(ListRequesBidsQuery));
          return this.$Amplify.graphqlOperation(ListRequesBidsQuery);
        default:
          return [];
      }
    },
  },
  methods: {
    getCategory: (category_id) => {
      let categoryName = "その他";
      if (category_id) {
        const categoryResult = test_category.results.filter((result) => {
          return result.id === category_id;
        });
        categoryName = categoryResult[0].name;
      }
      return categoryName;
    },
  },
});
</script>
<style lang="scss">
.c-request-list-container {
  padding: 20px 0;
}
.c-detail-btn {
  height: 52px;
  width: 104px;
  border: solid 1px #f39700;
  color: #f39700;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 14px;
  border-radius: 4px;
  bottom: 14px;
  background: #fff;
  &:hover {
    background: #f39700;
    color: #fff;
  }
}
@media only screen and (max-width: 480px) {
  .c-request-list-container {
    padding: 0;
  }
  .c-request-num {
    height: 40px;
    margin: 0 -10px -10px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
  }
}
</style>
