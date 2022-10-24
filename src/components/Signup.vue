<template>
  <form @submit.prevent="signup">
    <h1>SignUp Here</h1>

    <div v-if="error">
      <p class="error">{{ error }}</p>
    </div>

    <div class="input-box">
      <input type="text" name="" v-model="name" placeholder="Display Name" />
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
      <button>Sign Up</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import userSignup from "../composable/userSignup";
export default {
  setup(props,contex) {
    let name = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createAccount } = userSignup();

    let signup = async () => {
      let response = await createAccount(
        email.value,
        password.value,
        name.value
      );

      if (response) {
        contex.emit("enterChatroom");
      }
    };

    return { name, email, password, error, signup };
  },
};
</script>

<style>
.input-box {
  padding: 10px;
  margin: 5px 0;
}
.input-box > input {
  width: 400px;
  height: 30px;
  border-radius: 10px;
  outline: none;
  border: 3px solid rgb(206, 206, 206);
  padding: 5px;
  font-weight: bold;
}
</style>