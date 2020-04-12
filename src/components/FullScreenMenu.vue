<template>
  <div class="full-screen-menu">
    <div class="options">
      <div class="links">
        <a class="link-item" href="">{{ $t("works") }}</a>
        <a class="link-item" href="">{{ $t("cv") }}</a>
        <ChangeLanguage class="link-item" />
      </div>
      <SocialButtons />
    </div>
    <button @click="closeFullScreenMenu" class="full-screen-menu-close">
      <svg
        class=""
        enable-background="new 0 0 512.001 512.001"
        version="1.1"
        viewBox="0 0 512 512"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="active-path"
          d="m284.29 256 221.86-221.86c7.811-7.811 7.811-20.475 0-28.285s-20.475-7.811-28.285 0l-221.86 221.86-221.86-221.86c-7.811-7.811-20.475-7.811-28.285 0s-7.811 20.475 0 28.285l221.86 221.86-221.86 221.86c-7.811 7.811-7.811 20.475 0 28.285 3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857l221.86-221.86 221.86 221.86c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285l-221.86-221.86z"
          fill="#fff"
          data-old_color="#000000"
          data-original="#000000"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import SocialButtons from "./SocialButtons";
import ChangeLanguage from "./ChangeLanguage";

export default {
  name: "FullSreenMenu",
  components: {
    SocialButtons,
    ChangeLanguage
  },
  methods: {
    closeFullScreenMenu() {
      this.$parent.setFullScreenMenu(false);
    }
  }
};
</script>

<style lang="scss" scoped>
.full-screen-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #141844;

  .options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-height: 500px;
    height: 100%;
    padding: 25px 0;

    .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .link-item {
        text-decoration: none;
        color: #fff;
        margin-bottom: 40px;
        font-weight: bold;
        font-size: 32px;
      }
    }
  }

  .full-screen-menu-close {
    position: absolute;
    top: 50px;
    right: 50px;
    height: 35px;
    width: 35px;
    background: none;
    border: none;
  }
}
</style>
