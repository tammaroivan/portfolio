<template>
  <div class="not-found">
    <img class="img" src="@/assets/obi.jpg" alt="Obi Wan Kenobi" />
    <span class="description">
      This is not the page you are looking for.
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found {
  margin-top: 10rem;

  .img {
    height: 200px;
  }
  .description {
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
