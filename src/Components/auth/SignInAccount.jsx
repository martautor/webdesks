import React from 'react'
import { Form } from './AuthForm'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const SignInAccount = () => {
  const navigate = useNavigate()
    const HandleLogin = (email, password, e) => {

      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user)
          navigate('/main')
        })
        .catch((e) => {
          console.log(e.message)
        })
    }
    return (
      <Form
          title="Вход" 
          bTitle="Войти"
          links={<Link to='/register'>Нет аккаунта? Зарегистрируйтесь</Link>}
          handleClick={HandleLogin} 
      />
    )
}

export default SignInAccount