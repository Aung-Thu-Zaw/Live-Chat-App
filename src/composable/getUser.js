import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { ref } from "@vue/reactivity";
// import { useRouter } from "vue-router";
// let router = useRouter();
let error = ref(null);
let user = ref(auth.currentUser);
let signOutUser = async () => {
  try {
    await signOut(auth);
    // return router.push("/");
  } catch (err) {
    error.value = err.message;
  }
};

onAuthStateChanged(auth, (current_user) => {
  user.value = current_user;
});


let getUser = () => {
  return { error, user, signOutUser };
};

export default getUser;
