import _ from "@/assets/libs/lodash"

export default {
  state: () => ({
    component: "desktop",
    headerComponentName: undefined,
    routeName: undefined,
    hasFooter: true,
    referrer: undefined,
    isAndroid: false,
    isApple: false,
    isApp: false,
    appNo: ''
  }),
  mutations: {
    /**
     * @deprecated
     * 컴포넌트 상태 변경
     *
     * @param {State} state
     * @param {string} value
     */
    change(state, value) {
      state.component = value || "desktop";
    },

    /**
     * 헤더 셋팅
     *
     * @param {State} state
     * @param {object} object
     */
    setMobileHeader(state, object) {
      object = _.merge(
        {
          headerComponentName: undefined,
          routeName: undefined,
          hasFooter: true,
          referrer: undefined
        },
        object || {}
      );

      state.headerComponentName = object.headerComponentName;
      state.routeName = object.routeName || state.routeName;
      state.hasFooter = object.hasFooter;
      state.referrer = object.referrer;
    },
  }
}
