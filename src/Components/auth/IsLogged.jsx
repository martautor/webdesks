import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../../firebase'
 const IsLogged = () => {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
        if(user) {
          console.log("user is logged in");
          console.log(user); // user object
          return true
        } else {
          console.log("user is not logged in");
          console.log(user); // null
          return false
        }
      })
}
console.log(IsLogged)
export default IsLogged