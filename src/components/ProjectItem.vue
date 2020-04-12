<template>
  <div
    class="project"
    :style="{
      backgroundImage: 'url(' + require(`@/assets/projects/${imgUrl}`) + ')'
    }"
  >
    <div class="project-information">
      <h3 class="project-title">{{ title }}</h3>
      <span class="project-description">{{ description }}</span>
      <a :href="url" class="project-link">{{ url }}</a>
      <button class="btn-expand" @click="setShowExpandedImg()">
        <img src="../assets/expand.svg" alt="Expand" />
      </button>
    </div>
    <div
      v-if="showExpandedImg"
      class="expanded-container"
      @click="hideExpandedImg"
    >
      <img
        :src="require('@/assets/projects/' + imgUrl)"
        alt="Expanded Image"
        class="expanded-img"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: ["imgUrl", "title", "description", "url"],
  data() {
    return {
      showExpandedImg: false
    };
  },
  methods: {
    setShowExpandedImg() {
      this.showExpandedImg = true;
      console.log("show");
    },
    hideExpandedImg() {
      this.showExpandedImg = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  height: 300px;
  width: 300px;
  background-size: cover;

  .project-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .project-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    height: 100%;
    width: 100%;
    background: rgba(#000, 0.8);
    padding: 35px 15px;
    box-sizing: border-box;
    transition: all 0.1s ease-in;
    position: relative;

    .btn-expand {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;


      @media (max-width: 650px) {
        display: none;
      }

      img {
        height: 20px;
        width: 20px;
      }
    }

    .project-title {
      font-weight: bold;
      font-size: 22px;
      margin-bottom: 20px;
      line-height: 24px;
    }

    .project-link {
      color: #fff;
      margin-top: 20px;
      font-size: 12px;
    }
  }

  &:hover .project-information {
    opacity: 1;
  }

  .expanded-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(#000, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    img {
      width: 60%;
      max-width: 700px;
    }
  }
}
</style>
