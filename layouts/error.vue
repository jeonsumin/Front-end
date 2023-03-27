<template>
  <section class="sub_para02">
    <div class="error" :class="{ false: 'w800' }[$device.isMobile]">
      <!-- 오류 메시지 -->
      <div class="error_status tc">
        <p class="fail subcon_tit" :class="{ true: 'mobile' }[$device.isMobile]" v-html-custom=" errorMessage">
<!--          {{ errorMessage }}-->
        </p>
        <!-- 안내문구 -->
        <div class="text_info">
          <ul>
            <li>
            </li>
          </ul>
        </div>
        <!--// 안내문구 -->
      </div>
      <!--// 오류 메시지 -->
    </div>
    <div class="tc error_mobtn mgb120" :style="{ true: 'margin:0 auto;width:800px;' }[$device.isDesktop]">
      <button
        type="button"
        class="bt_go_home color_set_white f600 f14"
        @click.stop="$router.push({ path: '/' })"
        v-if="showHome"
      >
        홈으로 이동하기
      </button>
    </div>
  </section>
</template>

<script>
const ERROR_MESSAGE_MAP = {
  404: `찾을 수 없는 페이지입니다. <br> 요청하신 페이지가 사라졌거나, 잘못된 경로입니다.`,
  500: `시스템에 문제가 발생하였습니다.<br> 잠시후 다시 시도해주시기 바랍니다.`,
  400: '페이지에 문제가 발생하였습니다.',
}

export default {
  layout: 'error', // you can set a custom layout for the error page
  props: ['error'],

  computed: {
    showPrev () {
      if (this.error.showPrev === undefined) {
        return true
      } else {
        return this.error.showPrev
      }
    },
    showHome () {
      if (this.error.showHome === undefined) {
        return true
      } else {
        return this.error.showHome
      }
    },
    errorMessage () {
      return ERROR_MESSAGE_MAP[this.error.statusCode] || this.error.message
    },
  },
  mounted () {
    window.scrollTo(0,0)
  }
}
</script>

<style>

.error_status {
  overflow: hidden;
  padding: 30px 0 20px;
  margin: auto auto 0;
}

.error_status > span {
  margin-top: 5px;
}


.error_status p {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding-top: 86px;
  margin: 0 auto;
  width: 500px;
}

.error_status p.fail {
  /*background: url("/images/icon_nodata.svg") no-repeat center top;*/
  background-size: 56px;
}

.error_status p.fail.mobile {
  width: auto;
}

.error .bt_last button {
  margin-right: 0.5rem;
}

.error .bt_last button:last-child {
  margin-right: 0;
}

.error_status .text_info li::before {
  display: none;
}

.error_status .text_info {
  margin-top: 30px;
}

.error_status .text_info li {
  color: #20202c;
  font-size: 12px;
}

.error_status .text_info li span {
  font-size: 12px;
  font-weight: 400;
}

</style>
