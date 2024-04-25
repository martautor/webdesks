import { onAuthStateChanged } from "firebase/auth";
import IsLogged from "../Components/auth/IsLogged"
import SignInAccount from "../Components/auth/SignInAccount"
import { auth } from "../firebase";

const LoginPage = () => {
    let bool = false
    onAuthStateChanged(auth, (user) => {
        if(user) {
          console.log("user is logged in");
          console.log(user); // user object
          bool = true
        } else {
          console.log("user is not logged in");
          console.log(user); // null
          bool = false
        }
        return bool
      })
    return (
        <div>
            {console.log( IsLogged())}
            {IsLogged() ? window.history.back(): <SignInAccount/>}
        </div>
    )
}

export default LoginPage