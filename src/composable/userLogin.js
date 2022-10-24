import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "@firebase/auth";

let error = ref("");
let loginAccount = async (email, password) => {
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);

    if (!response) {
      throw new Error("Something Went Wrong!");
    }

    return response;
  } catch (err) {
    error.value = err.message;
  }
};

let userLogin = () => {
  return { error, loginAccount };
};

export default userLogin;
