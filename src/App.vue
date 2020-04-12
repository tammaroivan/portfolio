<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <Main />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Main
  }
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

  .content:before {
    content: "";
    display: block;
    background-image: url("./assets/oval_header.svg");
    background-repeat: no-repeat;
    background-position: top right;
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
}

@media (max-width: 600px) {
  #app .content:before {
    background-image: none;
  }
}
</style>
