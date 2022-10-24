<template>
  <nav v-if="user">
    <div>
      <p>
        Hi <span>{{ user.displayName }}</span>
      </p>
      <p class="email">logged in as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import getUser from "../composable/getUser";
export default {
  setup() {
    let { error, user, signOutUser } = getUser();

    let logout = async () => {
      await signOutUser();
    };
    return { error, user, logout };
  },
};
</script>

<style>
</style>