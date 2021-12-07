<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <transition name="slide" mode="out-in">
        <router-view class="content-view" />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/css/reset.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;900&display=swap");

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #1d225f;
  background-image: url("./assets/oval_header.svg");
  background-position: right top;
  background-repeat: no-repeat;
  overflow: auto;
}

.content {
  min-height: calc(100vh - 122px);
}

@media (max-width: 600px) {
  #app {
    background-image: none;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
