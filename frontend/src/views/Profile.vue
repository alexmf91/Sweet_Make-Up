<template>
  <div class="profile">
    <UserCard
      :name="currentUser.name"
      :surname="currentUser.surname"
      :picture="currentUser.picture"
      :email="currentUser.email"
    />
    <SearchBar />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserCard from "../components/UserCard.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "Profile",
  components: {
    SearchBar,
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
  background-color: wheat;
  padding: 4rem 0;
}
</style>
