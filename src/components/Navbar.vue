<template>
  <nav class="navbar">
    <div class="nav-container">
      <img src="../assets/logo.png" class="logo" alt="Logo" />
      <div class="left-menu">
        <a class="item-menu">{{ $t("works") }}</a>
        <a class="item-menu">{{ $t("cv") }}</a>
      </div>
      <div class="right-menu">
        <SocialButtons />
        <ChangeLanguage />
      </div>
      <div class="right-menu-responsive" @click="setFullScreenMenu(true)">
        <img src="../assets/open-menu.svg" alt="Menu" />
      </div>
    </div>
    <transition name="full-screen-menu-transition">
      <FullScreenMenu v-show="showFullScreenMenu" />
    </transition>
  </nav>
</template>

<script>
import SocialButtons from "./SocialButtons";
import FullScreenMenu from "./FullScreenMenu";
import ChangeLanguage from "./ChangeLanguage";

export default {
  name: "Navbar",
  components: {
    SocialButtons,
    ChangeLanguage,
    FullScreenMenu
  },
  data() {
    return {
      showFullScreenMenu: false
    };
  },
  methods: {
    setFullScreenMenu(val) {
      this.showFullScreenMenu = val;
    }
  }
};
</script>

<style scoped lang="scss">
.navbar {
  padding: 20px;
  z-index: 1;

  .nav-container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;

    .logo {
      height: 50px;
      width: 50px;
      margin-right: 30px;
    }

    .left-menu {
      display: flex;
    }

    .right-menu {
      display: flex;
      align-items: center;
      margin-left: auto;
    }

    .item-menu {
      font-weight: 600;

      &::after {
        display: block;
        content: "";
        border-bottom: solid 3px #fff;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        margin-top: 5px;
      }

      &:hover:after {
        transform: scaleX(1);
      }

      &:not(:last-child) {
        margin-right: 30px;
      }
    }

    .right-menu-responsive {
      display: none;
      margin-left: auto;

      img {
        height: 25px;
        width: 25px;
      }
    }
  }

  .full-screen-menu-transition-enter,
  .full-screen-menu-transition-leave-to {
    transform: translateX(100%);
  }

  .full-screen-menu-transition-enter-active,
  .full-screen-menu-transition-leave-active {
    transition: all 0.3s;
  }
}

@media (max-width: 600px) {
  .right-menu,
  .left-menu {
    display: none !important;
  }

  .right-menu-responsive {
    display: block !important;
  }
}
</style>
