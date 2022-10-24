<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <ChatForm></ChatForm>
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow";
import ChatForm from "../components/ChatForm";
import { useRouter } from "vue-router";

import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar";
import getUser from "../composable/getUser";
export default {
  components: {
    ChatWindow,
    ChatForm,
    Navbar,
  },
  setup() {
    let router = useRouter();

    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
    return {};
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>