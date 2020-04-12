<template>
  <div class="social">
    <a
      href="https://www.linkedin.com/in/ivantammaro/"
      target="_"
      class="social-item"
    >
      <img src="../assets/social/linkedin.svg" alt="Linkedin" />
    </a>
    <a href="https://m.me/ivantammarook" target="_" class="social-item">
      <img src="../assets/social/messenger.svg" alt="Messenger" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.social {
  .social-item {
    background: rgba(#fff, 0.2);
    padding: 15px;
    border-radius: 50%;

    &:first-child img {
      margin-bottom: 5px;
    }

    &:not(:last-child) {
      margin-right: 15px;
    }

    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
