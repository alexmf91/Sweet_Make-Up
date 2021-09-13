<template>
  <div class="profile">
    <UserCard
      :name="currentUser.name"
      :surname="currentUser.surname"
      :picture="currentUser.picture"
      :email="currentUser.email"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserCard from "../components/UserCard.vue";

export default {
  name: "Profile",
  components: {
    UserCard,
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 4rem 0;
}
</style>
