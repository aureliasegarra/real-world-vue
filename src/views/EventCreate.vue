<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This is an event created by {{ user.id }}</p>
    <p> There are {{ categoryLength }} categories</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    categoryLength() {
      return this.$store.getters.categoryLength
    },
    ...mapState(["user", "categories"]),
  },
};
</script>

<style lang="scss" scoped></style>
