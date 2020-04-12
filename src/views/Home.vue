<template>
  <div class="main">
    <div class="main-description">
      <h1 class="name">Ivan</h1>
      <h1 class="surname">Tammaro</h1>
      <div class="summary">
        <p v-html="$t('summary.currently')" class="summary-currently"></p>
        <p>
          {{ $t("summary.phrase") }}
        </p>
      </div>
    </div>
    <img class="main-image" src="../assets/main_image.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  max-width: 1600px;
  position: relative;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;

  .main-image {
    position: absolute;
    right: 0;
    top: 40vh;
    right: 40px;

    @media (max-width: 1340px) {
      width: 500px;
    }

    @media (max-width: 1080px) {
      display: none;
    }

    @media (max-height: 1065px) {
      height: 400px;
    }

    @media (max-height: 880px) {
      display: none;
    }
  }

  .main-description {
    font-size: 10rem;
    font-weight: 900;
    text-align: left;
    position: absolute;
    top: 4vh;

    .name {
      color: #fff;
    }

    .surname {
      color: #7885ad;
    }

    .summary {
      max-width: 500px;
      font-size: 22px;
      line-height: 26px;
      color: #e8e8e8;
      margin-top: 100px;
      font-weight: 500;
      padding: 15px;

      .redirect-link {
        text-decoration: none;
        color: #fff;
        background: rgba(#fff, 0.5);
        padding: 0 5px;
      }

      .summary-currently {
        margin-bottom: 30px;
      }
    }
    @media (max-width: 860px) {
      .name,
      .surname {
        font-size: 15vw;
      }

      .summary {
        font-size: 18px;
      }
    }
  }
}
</style>
