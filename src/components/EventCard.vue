<template>
  <router-link :to="{ name: 'event-show', params: { id: '1' } }"
    >Show Event #1
    <div>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <span>{{ event.attendees.length }} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: "Beach Cleanup",
        date: "Tues Aug 19, 2018",
        time: "6:00",
        attendees: [
          { id: "abc123", name: "Adam Joe" },
          { id: "def456", name: "Gregg Pollack" },
        ],
      },
    };
  },
};
</script>

<style scoped>
h4 {
  color: green;
}
</style>
