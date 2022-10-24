<template>
  <div class="chat-window">
    <div class="messages" ref="messageBox">
      <div class="single" v-for="message in formatedMessages" :key="message.id">
        <span class="created_at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="messages">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";
import { computed, onUpdated } from "@vue/runtime-core";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    let messages = ref([]);
    // Auto Scrolling Features
    let messageBox = ref(null);

    onUpdated(() => {
      messageBox.value.scrollTop = messageBox.value.scrollHeight;
    });

    let formatedMessages = computed(() => {
      return messages.value.map((message) => {
        let formatTime = formatDistanceToNow(message.created_at.toDate());
        return { ...message, created_at: formatTime };
      });
    });

    let colRef = collection(db, "messages");
    let q = query(colRef, orderBy("created_at", "asc"));

    onSnapshot(q, (snap) => {
      let results = [];

      snap.docs.forEach((doc) => {
        let document = { id: doc.id, ...doc.data() };

        if (doc.data().created_at) {
          results.push(document);
        }
      });

      messages.value = results;
    });

    return { formatedMessages, messageBox };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created_at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>