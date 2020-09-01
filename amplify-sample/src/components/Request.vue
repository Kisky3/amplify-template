<template>
  <div>
    <div v-if="!isMobile" class="c-request">
      <span class="c-request-mark" v-if="mark"></span>
      <a href="#"><img :src="image" @click="handleRequest" /></a>
      <div class="c-request-container">
        <div class="c-request-header">
          <span>カテゴリー: {{ category }}</span>
          <span>地域: {{ address }}</span>
          <span>距離: {{ distance }}</span>
          <span>売却希望期限: {{ limited }}</span>
        </div>
        <div class="c-request-content">
          <div class="c-request-title">
            <a href=""> {{ title }}</a>
            <label> 他{{ numbers }}点 </label>
          </div>
          <v-row>
            <div>
              見積期間:
              <span>{{ data }}</span>
            </div>
            <div>
              買取背景:
              <span>{{ background }}</span>
            </div>
          </v-row>
          <v-row>
            <div>
              入札件数:
              <span>{{ numbers }}件</span>
            </div>
            <div>
              依頼ID:
              <span>{{ offer_id }}</span>
            </div>
          </v-row>
          <slot />
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="c-request" @click="handleRequest">
      <div class="c-request-header">
        <div class="c-request-data">
          <span>カテゴリー: {{ category }}</span>
          <span>地域: {{ address }}</span>
          <span>距離: {{ distance }}</span>
          <span>引取期限: {{ limited }}</span>
          <span class="c-request-mark" v-if="mark"></span>
        </div>
      </div>
      <div class="c-request-container">
        <v-row>
          <img :src="image" />
          <div class="c-request-title">
            <label>{{ title }}</label>
            <span>他{{ numbers }}点</span>
          </div>
        </v-row>
        <div>
          <span
            >見積期間:
            <span class="bold">{{ data }}</span>
          </span>
          <span
            >買取背景: <span class="bold">{{ background }}</span></span
          >
          <span
            >入札件数: <span class="bold">{{ numbers }}件</span></span
          >
          <span
            >依頼ID: <span class="bold">{{ offer_id }}</span></span
          >
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Request",
  //TODO スキマーに合わせてtypeを作成する
  props: {
    image: {
      type: String,
      default: "",
    },
    mark: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    distance: {
      type: String,
      default: "",
    },
    limited: {
      type: Date,
      default: "",
    },
    title: {
      type: Date,
      default: "",
    },
    data: {
      type: Date,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
    offer_id: {
      type: Number,
      default: 0,
    },
    numbers: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isMobile: this.$vuetify.breakpoint.xs,
    };
  },
  methods: {
    handleRequest() {
      alert(this.offer_id);
    },
  },
});
</script>
<style lang="scss">
.c-request {
  width: auto;
  height: 106px;
  position: relative;
  border: solid 1px #f39700;
  background: #fcf4e7;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .c-request-mark {
    position: absolute;
    border-top: 15px solid #1cbb36;
    border-left: 15px solid #1cbb36;
    border-right: 15px solid transparent;
    border-bottom: 15px solid transparent;
    display: block;
    left: 0;
    z-index: 1;
    top: 0;
    &:before {
      content: "未";
      position: absolute;
      z-index: 2;
      display: block;
      color: #fff;
      font-family: ヒラギノ角ゴ Std, w7;
      font-size: 13px;
      top: -15px;
      left: -12px;
    }
  }
  a {
    width: 106px;
    height: 106px;
    border-left: none;
    position: absolute;
    left: 0;
    img {
      width: 106px;
      height: 106px;
      border: solid 1px #f39700;
      border-left: none;
      position: absolute;
      left: 0;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  .c-request-container {
    position: absolute;
    width: calc(100% - 106px);
    right: 0;
    display: flex;
    justify-content: start;
    flex-direction: column;
    top: 0;
    .c-request-header {
      height: 24px;
      width: 100%;
      background: #f39700;
      color: #fff;
      font-size: 13px;
      top: 0;
      display: flex;
      padding: 0 0 0 10px;
      justify-content: start;
      align-items: center;
      span {
        margin-right: 20px;
        font-weight: bold;
      }
    }
    .c-request-content {
      display: flex;
      justify-content: start;
      flex-direction: column;
      padding: 10px;
      height: auto;
      .c-request-title {
        padding: 0;
        display: flex;
        color: #0861ad;
        font-size: 14px;
        font-weight: bold;
        width: 100%;
        max-width: 700px;
        justify-content: start;
        label {
          white-space: nowrap;
          padding: 0;
          display: block;
          font-size: 14px;
          font-weight: bold;
          width: auto;
        }
        a {
          display: block;
          position: relative;
          text-decoration: none;
          width: auto;
          height: auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 650px;
          color: #0861ad !important;
          margin-right: 10px;
          &:hover {
            cursor: pointer;
            opacity: 0.8;
          }
        }
      }
      .row {
        padding: 0 10px;
        font-size: 13px;
        div {
          margin-top: 1px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            margin-left: 8px;
            font-weight: bold;
          }
        }
      }
      span {
        font-size: 13px;
        display: block;
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  .c-request {
    position: relative;
    height: auto;
    width: auto;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .c-request-header {
      height: auto;
      width: 100%;
      background: #f39700;
      color: #fff;
      font-size: 13px;
      top: 0;
      display: flex;
      padding: 0 0 0 10px;
      justify-content: start;
      align-items: center;
      font-weight: bold;
      .c-request-mark {
        position: absolute;
        right: -15px !important;
        left: auto;
        top: 8px;
        height: 21px;
        width: 21px;
        background: #1cbb36;
        border: none;
        border-radius: 4px;
        &:before {
          content: "未";
          position: absolute;
          z-index: 2;
          display: block;
          color: #fff;
          font-family: ヒラギノ角ゴ Std, w7;
          font-size: 13px;
          top: 1px;
          left: 4px;
        }
      }
      .row {
        padding: 10px;
        margin-left: -12px;
        margin-right: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
      span {
        margin-right: 10px;
        font-weight: bold;
        white-space: nowrap;
      }
    }
    .c-request-container {
      width: 100%;
      position: relative;
      padding: 5px;
      display: flex;
      justify-content: start;
      flex-direction: column;
      .row {
        margin: 0;
        flex-wrap: nowrap;
        margin-bottom: 2px;
      }
      img {
        position: relative;
        border: none !important;
        height: 46px;
        width: 46px;
      }
      .c-request-title {
        font-size: 14px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        position: relative;
        text-decoration: none;
        width: auto;
        color: #0861ad !important;
        margin-right: 10px;
        label {
          width: 100%;
          margin-left: 10px;
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        span {
          color: #0861ad;
          font-size: 14px;
          font-weight: bold;
          margin-left: 10px;
        }
      }
      span {
        font-size: 12px;
        margin-right: 5px;
        white-space: nowrap;
        .bold {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
