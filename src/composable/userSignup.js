import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

let error = ref("");

let createAccount = async (email, password, name) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);

    if (!response) {
      throw new Error("Something Went Wrong!");
    }
    updateProfile(response.user, {
      displayName: name,
    });

    return response;
  } catch (err) {
    error.value = err.message;
  }
};

let userSignup = () => {
  return { error, createAccount };
};

export default userSignup;
