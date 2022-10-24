import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

let useCollection = () => {
  let error = ref(null);

  let addDocument = async (doc) => {
    try {
      let colRef = collection(db, "messages");
      await addDoc(colRef, doc);

    } catch (err) {
      error.value = "could not send the message";
    }
  };
  return { error, addDocument };
};
export default useCollection;
