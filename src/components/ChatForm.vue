<template>
  <form>
    <textarea
      placeholder="Text message and hit enter to send"
      v-model="message"
      @keypress.enter="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composable/getUser";
import { timestamp } from "@/firebase/config";
import useCollection from "../composable/useCollection";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();

    let { error, addDocument } = useCollection();

    let handleSubmit = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: timestamp,
      };
      message.value = "";

      await addDocument(chat);
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>