<template>
  <select
    class="change-language"
    v-model="$i18n.locale"
    v-on:change="changedLanguage"
  >
    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
      $t(`languages.${lang}`)
    }}</option>
  </select>
</template>

<script>
export default {
  name: "ChangeLanguage",
  data() {
    return { langs: ["en", "es"] };
  },
  methods: {
    changedLanguage() {
      this.$ga.event("language", "change", "lang", this.$i18n.locale);
    }
  }
};
</script>

<style lang="scss" scoped>
.change-language {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  border-radius: 0;
  padding-bottom: 5px;
  color: #fff;
  font-weight: 600;
  border-bottom: 3px solid #fff;
  cursor: pointer;
  margin: 0 25px;
}
</style>
