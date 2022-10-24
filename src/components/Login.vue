<template>
  <form @submit.prevent="login">
    <h1>Login Here</h1>

    <div v-if="error">
      <p class="error">{{ error }}</p>
    </div>

    <div class="input-box">
      <input type="email" name="" v-model="email" placeholder="Email" />
    </div>
    <div class="input-box">
      <input
        type="password"
        name=""
        v-model="password"
        placeholder="password"
      />
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import userLogin from "../composable/userLogin";
// import { useRouter } from "vue-router";
export default {
  setup(props, contex) {
    // let router = useRouter();
    let email = ref("");
    let password = ref("");

    let { error, loginAccount } = userLogin();

    let login = async () => {
      let response = await loginAccount(email.value, password.value);

      if (response) {
        // return router.push("/chatroom");
        contex.emit("enterChatroom");
      }
    };

    return { email, password, error, login };
  },
};
</script>

<style>
</style>