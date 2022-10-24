<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Signup @enterChatroom="enterChatroom"></Signup>
      <div>
        <p>
          Already have an account?
          <span @click="showLoginForm = !showLoginForm">Login</span>
        </p>
      </div>
    </div>

    <div v-else>
      <Login @enterChatroom="enterChatroom"></Login>
      <div>
        <p>
          You don't have account?
          <span @click="showLoginForm = !showLoginForm">Signup</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useRouter } from "vue-router";
export default {
  components: {
    Login,
    Signup,
  },
  setup() {
    let router = useRouter();
    let showLoginForm = ref(true);
    let enterChatroom = () => {
      return router.push("/chatroom");
    };
    return { showLoginForm, enterChatroom };
  },
};
</script>

<style scoped>
.welcome {
  text-align: center;
  padding: 20px 0;
}
span {
  font-weight: 800;
  color: rgb(0, 158, 206);
  cursor: pointer;
}
</style>