import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

export const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])
    function userSignOut() {
        signOut(auth)
        .then(() => console.log("Вы вышли"))
        .catch((e) => console.log(e))
    }
  return (
    <div>
        {authUser ? (
            <div>
                <p>Вы вошли как {authUser.email}</p>
                <button onClick={userSignOut}></button>
            </div>
        ): <p style={{textAlign: 'center'}}>Вы не вошли в аккаунт. <Link to='/login'>Войти</Link> </p> }
    </div>
  )
}
