<template>
  <div class="last-projects">
    <h1 class="title">{{ $t("projects.lastProjects") }}</h1>
    <div class="project-list">
      <ProjectItem
        imgUrl="otero.png"
        :title="$t('projects.otero.title')"
        :description="$t('projects.otero.description')"
        url="http://www.oteroseguros.com.ar/"
      />
      <ProjectItem
        imgUrl="weather.png"
        :title="$t('projects.weather.title')"
        :description="$t('projects.weather.description')"
      />
      <ProjectItem
        imgUrl="cshub.png"
        :title="$t('projects.cshub.title')"
        :description="$t('projects.cshub.description')"
      />
    </div>
    <div class="warning">
      {{ $t("projects.warning") }}
    </div>
  </div>
</template>

<script>
import ProjectItem from "../components/ProjectItem";

export default {
  name: "Projects",
  components: {
    ProjectItem
  }
};
</script>

<style lang="scss" scoped>
.last-projects {
  display: flex;
  flex-direction: column;
  position: relative;
  display: flex;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px 50px 15px;
  box-sizing: border-box;

  .title {
    font-weight: 900;
    font-size: 48px;
    margin-bottom: 40px;
  }

  .project-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .project:not(:last-child) {
      margin-bottom: 40px;
      @media (min-width: 650px) {
        margin-right: 50px;
      }
    }
  }

  .warning {
    padding-top: 20px;
    font-weight: 200;
  }
}
</style>
